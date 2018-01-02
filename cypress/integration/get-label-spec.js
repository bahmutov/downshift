import React from 'react'
import {mount} from 'cypress-react-unit-test'
import Downshift from '../../src'

test('label "for" attribute is set to the input "id" attribute', () => {
  const wrapper = mount(<BasicDownshift />)
  const label = wrapper.find('label').first()
  const input = wrapper.find('input').first()
  expect(label.instance().getAttribute('for')).toBeDefined()
  expect(label.instance().getAttribute('for')).toBe(
    input.instance().getAttribute('id'),
  )
})

function BasicDownshift({
  inputProps,
  labelProps,
  getLabelPropsFirst = false,
  ...rest
}) {
  return (
    <Downshift
      {...rest}
      render={({getInputProps, getLabelProps}) => {
        if (getLabelPropsFirst) {
          labelProps = getLabelProps(labelProps)
          inputProps = getInputProps(inputProps)
        } else {
          inputProps = getInputProps(inputProps)
          labelProps = getLabelProps(labelProps)
        }
        return (
          <div>
            <input {...inputProps} />
            <label {...labelProps} />
          </div>
        )
      }}
    />
  )
}

/* eslint no-console:0 */
