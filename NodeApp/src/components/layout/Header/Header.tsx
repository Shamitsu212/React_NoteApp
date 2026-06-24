import { NotebookIcon } from 'lucide-react'
import styles from './Header.module.css'
import Search_UI from '../../UI/Search_UI/Search_UI'
import { useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'

function Header() {

    const context = useContext(SearchContext)

    if(!context){
        throw new Error("Ошибка в контексте SearchContext")
    }

    const { search, setSearch } = context;

  return (
    <header className={styles.header}>
      
      <div className={styles.header_Logo}>
        
        <NotebookIcon size={36} color='#F4BE1A' />

        Notes

      </div>
      
      <Search_UI string={search} setString={setSearch}/>


    </header>
  )
}

export default Header
