
import AboutProgram from '../components/AboutProgram'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import Learning from '../components/Learning'
import Questions from '../components/Questions'
import Tracks from '../components/Tracks'
import WhoCanApply from '../components/WhoCanApply'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <main className={styles.container}>
      <Banner />
      <Courses />
      <Tracks />
      <AboutProgram />
      <Learning />
      <WhoCanApply />
      <Questions/>
    </main>
  )
}
