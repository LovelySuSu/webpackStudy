import _ from 'lodash'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['a','b','c'],'***'))

$('body').append(dom)