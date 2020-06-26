import React from 'react'
import ReactDOM from 'react-dom'

import { treeify } from './utilities'
import { FoldersTree } from './FoldersTree'

import './index.css'

const endpointsFlat = [
	'auth/login',
	'auth/register',
	'auth/get-user',
	'payments/get-payment-methods',
	'payments/delete-payment-method',
	'payments/list-plans',
	'payments/get-user-plan',
	'payments/update-user-plan',
	'tests/file',
	'tests/folder/file'
]
const endpoints = treeify(endpointsFlat)

const App = () => {
	return <FoldersTree endpoints={endpoints}/>
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)