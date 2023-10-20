import { createContext, useMemo, useState } from 'react'

const EditingModeContext = createContext()

const EditingModeProvider = ({ children }) => {
  const [editingMode, setEditingMode] = useState(false)

  const toggleEditingMode = () => {
    setEditingMode((prevState) => !prevState)
    console.log(editingMode)
  }

  const closeEditingMode = () => {
    setEditingMode(false)
    console.log(editingMode)
  }

  const openEditingMode = () => {
    setEditingMode(true)
    console.log(editingMode)
  }
  const editModeValue = useMemo(() => ({ toggleEditingMode, closeEditingMode, openEditingMode, setEditingMode, editingMode }), [editingMode])

  return <EditingModeContext.Provider value={editModeValue}>{children}</EditingModeContext.Provider>
}

export { EditingModeContext, EditingModeProvider }
