/**
 * @description Char codes 0 to 31.
 */
const range1 = '\U0000-\U001F'
/**
 * @description Char codes 127 to 159.
 */
const range2 = '\U007F-\U009F'
/**
 * @description Char codes 1536 to 1540.
 */
const range3 = '\U0600-\U0604'
/**
 * @description Char codes 8204 to 8207.
 */
const range4 = '\U200C-\U200F'
/**
 * @description Char codes 8232 to 8239.
 */
const range5 = '\U2028-\U202F'
/**
 * @description Char codes 8288 to 8303.
 */
const range6 = '\U2060-\U206F'
/**
 * @description Char codes 65520 to 65535.
 */
const range7 = '\UFFF0-\UFFFF'

const char1 = String.fromCharCode(92)

const char2 = String.fromCharCode(34)

const char3 = String.fromCharCode(173)

const char4 = String.fromCharCode(1807)

const char5 = String.fromCharCode(6068)

const char6 = String.fromCharCode(6069)

const char7 = String.fromCharCode(65279)

export const escapable = ({
  char1,
  char2,
  range1,
  range2,
  char3,
  range3,
  char4,
  char5,
  char6,
  range4,
  range5,
  range6,
  char7,
  range7,
}) as const
