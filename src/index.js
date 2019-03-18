// import _ from 'lodash'
// import $ from 'jquery'
import { ui } from './jquery.ui'

ui()
const dom = $('<div>')
dom.html(_join(['a','b','c'],'--!-'))

$('body').append(dom)