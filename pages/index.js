import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {setHeading} from '../redux/actions'
import {connect} from "react-redux"
import {Component} from 'react'
class Home extends Component {
  render(){
    return (
      <div className={styles.container}>
        <Head>
          <title>NextJS - Redux - Bootstrap</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {this.props.heading}
          </h1>
          <button onClick={()=>this.props.setHeading("Heading set using Redux!")}>Change Heading</button>
        </main>
      </div>
    )
  }
}
function mapStateToProps({common}){
  return {
    heading:common.heading
  }
}
export default connect(mapStateToProps,{setHeading})(Home)