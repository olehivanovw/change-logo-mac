'use strict'
const CLASS_ACCORDION = '.accordion'
const CLASS_ACCORDION_HEADING = '.accordion-list-item-heading'
const CLASS_ACCORDION_ICON_PLUS = '.accordion-list-item-img__plus'
const CLASS_ACCORDION_ICON_MINUS = '.accordion-list-item-img__minus'
const CLASS_ACCORDION_TEXT = '.accordion-list-item__text'
const CLASS_OPEN = '.open'

const accordion = document.querySelector(CLASS_ACCORDION)
const accordionList = Array.from(document.querySelectorAll(CLASS_ACCORDION_HEADING))
const accordionPlus = Array.from(document.querySelectorAll(CLASS_ACCORDION_ICON_PLUS))
const accordionMinus = Array.from(document.querySelectorAll(CLASS_ACCORDION_ICON_MINUS))
const accordionText = Array.from(document.querySelectorAll(CLASS_ACCORDION_TEXT))

accordion.addEventListener('click', onAccordionClick)

function onAccordionClick(e) {
  const target = e.target
  const accordHead = target.closest(CLASS_ACCORDION_HEADING)
  const accordElIndex = accordionList.indexOf(accordHead)
  const activeEl = accordion.querySelector(CLASS_OPEN)
  const activeElIndex = accordionList.indexOf(activeEl)

  if (accordHead) {
    openEl(accordElIndex)
  }

  if (activeEl) {
    openEl(accordElIndex)
    closeEl(activeElIndex)
  }
}

function openEl(index) {
  accordionList[index].classList.add('open')
  accordionPlus[index].classList.add('open')
  accordionMinus[index].classList.add('open')
  accordionText[index].classList.add('open')
}

function closeEl(index) {
  accordionList[index].classList.remove('open')
  accordionPlus[index].classList.remove('open')
  accordionMinus[index].classList.remove('open')
  accordionText[index].classList.remove('open')
}