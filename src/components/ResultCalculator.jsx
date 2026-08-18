import React, { useState } from 'react'

const initialSubjects = [
  { name: 'Subject 1', mse: '', ese: '' },
  { name: 'Subject 2', mse: '', ese: '' },
  { name: 'Subject 3', mse: '', ese: '' },
  { name: 'Subject 4', mse: '', ese: '' },
]

function gradeFromPercent(p) {
  if (p >= 90) return 'A+'
  if (p >= 80) return 'A'
  if (p >= 70) return 'B+'
  if (p >= 60) return 'B'
  if (p >= 50) return 'C'
  if (p >= 40) return 'D'
  return 'F'
}

export default function ResultCalculator() {
  const [subjects, setSubjects] = useState(initialSubjects)

  const updateField = (idx, key, value) => {
    const s = subjects.slice()
    s[idx][key] = value
    setSubjects(s)
  }

  const results = subjects.map((sub) => {
    const mse = parseFloat(sub.mse) || 0
    const ese = parseFloat(sub.ese) || 0
    const weighted = +(mse * 0.3 + ese * 0.7).toFixed(2)
    // Pass rules: MSE >= 40% of 30 => 12, ESE >= 40% of 70 => 28, and weighted >= 40
    const msePass = mse >= 12
    const esePass = ese >= 28
    const weightedPass = weighted >= 40
    const pass = msePass && esePass && weightedPass
    return { ...sub, mse, ese, weighted, pass, msePass, esePass, weightedPass }
  })

  const totalObtained = results.reduce((acc, r) => acc + r.weighted, 0)
  const totalMax = 100 * results.length
  const percent = +((totalObtained / totalMax) * 100).toFixed(2)
  const overallPass = results.every((r) => r.pass)
  const overallGrade = overallPass ? gradeFromPercent(percent) : 'F'

  return (
    <div className="card">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        {subjects.map((sub, i) => (
          <div className="row" key={i}>
            <input
              className="sub-input"
              value={sub.name}
              onChange={(e) => updateField(i, 'name', e.target.value)}
            />
            <input
              type="number"
              min="0"
              max="30"
              placeholder="MSE (0-30)"
              value={sub.mse}
              onChange={(e) => updateField(i, 'mse', e.target.value)}
            />
            <input
              type="number"
              min="0"
              max="70"
              placeholder="ESE (0-70)"
              value={sub.ese}
              onChange={(e) => updateField(i, 'ese', e.target.value)}
            />
            <div className="weighted">Weighted: {results[i].weighted}</div>
          </div>
        ))}
      </form>

      <div className="summary">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>MSE</th>
              <th>ESE</th>
              <th>Weighted</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
                <tr key={idx}>
                  <td>{r.name}</td>
                  <td>{r.mse}</td>
                  <td>{r.ese}</td>
                  <td>
                    {r.weighted}
                    <span style={{marginLeft:12, color: r.pass ? 'green' : 'crimson', fontWeight:600}}>
                      {r.pass ? ' Pass' : ' Fail'}
                    </span>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>

        <div className="overall">
          <div>Total Obtained: {totalObtained.toFixed(2)} / {totalMax}</div>
          <div>Percentage: {percent}%</div>
          <div>Grade: {overallGrade}</div>
        </div>
      </div>
    </div>
  )
}
