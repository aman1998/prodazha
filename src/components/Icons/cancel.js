import React from 'react'
import styles from './icons.module.css'
import { connect } from 'react-redux'
import { showLogin } from '../../store/actions'

let Cancel = ({changeLogin}) => {
	return(
		<div onClick={() => changeLogin(false)}>
			<svg version="1.1" id="Capa_1" className={styles.cancel} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 180.607 180.607" xmlSpace="preserve">
				<path d="M180.607,10.607l-79.696,79.697l79.696,79.697L170,180.607l-79.696-79.696l-79.696,79.696L0,170.001l79.696-79.697L0,10.607
					L10.607,0.001l79.696,79.696L170,0.001L180.607,10.607z"/>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
				<g>
				</g>
			</svg>
		</div>
	)
}

const mapStateToProps = (state) => ({
    login: state.login
})

const mapDispatchToProps = (dispatch) => ({
    changeLogin: (login) => dispatch(showLogin(login))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cancel)