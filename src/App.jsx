import React from 'react'
import "./index.css"
import MultiDropDown from './MultiDropDown';

const OPTIONS = [
  { id: 1, label: "Javascript", value: "javascript" },
  { id: 2, label: "Python", value: "python" },
  { id: 3, label: "Java", value: "java" },
  { id: 4, label: "C++", value: "cpp" },
  { id: 5, label: "C#", value: "csharp" },
  { id: 6, label: "TypeScript", value: "typescript" },
  { id: 7, label: "Go", value: "go" },
  { id: 8, label: "Rust", value: "rust" },
  { id: 9, label: "PHP", value: "php" },
  { id: 10, label: "Ruby", value: "ruby" },
  { id: 11, label: "Kotlin", value: "kotlin" }
];

const App = () => {
  return (
    <div>
      <MultiDropDown options={OPTIONS}/>
    </div>
  )
}

export default App