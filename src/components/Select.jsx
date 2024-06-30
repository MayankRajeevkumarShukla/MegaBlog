import React,{useId} from 'react'

function Select({
    options,
    label,
    classname="",
    ...props
},ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {/* yeh niche wala synatx hai isliye hai kyuki */}
      {label && <label htmlFor={id}
      className=''
      ></label>}
      <select 
      name="" 
      ref={ref}
      id={id}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full 
        ${classname}`}
      >
          {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
          ))}

      </select>
    </div>
  )
}
// forwarRef yaar states pass krne kae liye hota hai
export default React.forwardRef(Select)
