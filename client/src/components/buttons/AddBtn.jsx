import React from 'react'

const AddBtn = (clickAction) => {
  return (
    <button
      type="button"
      className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={clickAction}
    >
      <PlusIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default AddBtn
