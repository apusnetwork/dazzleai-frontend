import { default as RcSlider } from 'rc-slider';
import Input from '../input/input';
import Label from '../input/label';

interface SliderProps {
  label?: string
  info?: string
  min?: number
  max?: number
  step?: number
  value?: number
  onChange: (n: number | number[]) => void
}


export default function Slider(props: SliderProps): JSX.Element {

  return (
    <div>
      {props.label ? <Label>{props.label}</Label> : null}
      <RcSlider
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
        railStyle={{
          background: 'rgb(60, 63, 68)'
        }}
        trackStyle={{
          backgroundColor: '#5866e6',
          opacity: 0.8
        }}
        handleStyle={{
          borderWidth: 3,
          borderColor: '#5866e6',
          backgroundColor: 'rgb(60, 63, 68)',
          width: 14,
          height: 14,
          marginTop: -5,
          marginLeft: 0,
          opacity: 1
        }}
      />
      {props.info ? <small className='small'>{props.info}</small> : null}

    </div>
  )

}


export function VerticalSlider(props: SliderProps): JSX.Element {

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {props.label ? <Label><small style={{ fontSize: 11, display: 'block', marginTop: -3 }}>{props.label}</small></Label> : null}
      <RcSlider
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
        railStyle={{
          background: 'rgb(60, 63, 68)'
        }}
        trackStyle={{
          backgroundColor: '#5866e6',
          opacity: 0.8
        }}
        handleStyle={{
          borderWidth: 3,
          borderColor: '#5866e6',
          backgroundColor: 'rgb(60, 63, 68)',
          width: 14,
          height: 14,
          marginTop: 0,
          marginLeft: -5,
          opacity: 1
        }}
        vertical
      />
      <div style={{ height: 36, paddingTop: 12 }}>
        <Input
          id=''
          type='number'
          size='xs'
          value={props.value}
          onChange={e => props.onChange(parseFloat(e.target.value))}
          disableInfo
          customStyles={['no-margin']}
        />
      </div>

    </div>
  )

}