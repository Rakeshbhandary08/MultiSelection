import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const MultiDropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState([]);
  const dropDownref=useRef()
  const inputRef=useRef() //{inputRef:{current:nulll}}
  const [query,setQuery]=useState("")

  //filter the type key
  const filterOption=options.filter((obj)=>obj.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(()=>{
   if(inputRef.current && isOpen){
      inputRef.current.focus()
   }

  },[isOpen])

  useEffect(()=>{
     const handleClickOutside=(e)=>{
        if(dropDownref.current && !dropDownref.current.contains(e.target)){
          setIsOpen(false);
          setQuery("")
        }
     }
     document.addEventListener('click',handleClickOutside)

     return ()=>{
      document.removeEventListener('click',handleClickOutside)
     }
  },[])
  
    //{ id: 11, label: "Kotlin", value: "kotlin" }
  //create  a function to add the in the list
  function handleOption(option){
         let isAlreadyPresent=selected.some((obj)=>obj.id === option.id)
         if(isAlreadyPresent){
          setSelected((prev)=>prev.filter((obj)=>obj.id !== option.id))
         }
         else{
          setSelected((prev)=>[...prev,option])
         }
         
       
  }

  //function to delete a particular field
  function clearInput(obj){
      setSelected(prev=>prev.filter((o)=>o.id !== obj.id))
      
  }
  
  

  return (
    <div className="container" >
      <h2 className="title">Multi Select Dropdown</h2>

      <div className="wrapper" ref={dropDownref}>
        <div className="trigger" onClick={() => setIsOpen(!isOpen)}>
          <div className="selected-container">
            {selected.length > 0 ? (
              selected.map((item) => (
                <span key={item.id} className="tag">
                  {item.label}
                  <button className="remove-btn" onClick={(e)=>{e.stopPropagation();clearInput(item)}}>x</button>
                </span>
              ))
            ) : (
              <span className="placeholder">Select options...</span>
            )}
          </div>

          <div className="actions">
            {selected.length > 0 && (
              <button className="clear-btn" onClick={()=>setSelected([])}>Clear All</button>
            )}
          </div>

          <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        </div>
        {/* SEARCHING AND CHOOSING */}
        {isOpen && (
          <div className="dropdown">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              ref={inputRef}
              value={query}
              onChange={(e)=>{setQuery(e.target.value)}}
            />
            <div className="options-list">
              {filterOption.map((option) => {
                return (
                  <div className="option" key={option.id} onClick={()=>handleOption(option)}>
                    <input type="checkbox" checked={selected.some((obj)=>obj.id === option.id)} onChange={()=>{}}/>
                    <span>{option.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiDropDown;
