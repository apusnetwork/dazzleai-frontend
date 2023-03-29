import styles from './avatar.module.scss'


function getColor(char: string): string {
  const code = char.charCodeAt(0) % 24 + 1
  return `hsl(${Math.round(15 * code)}, ${80}%, ${74}%)`
}


interface AvatarProps {
  name?: string
  image?: string
  size?: number
}


export default function Avatar({ image, name, size = 30 }: AvatarProps): JSX.Element {
  let initial = ''
  let color = ''
  if (name) {
    initial = name.substring(0, 1).toUpperCase()
    color = getColor(initial)
  }

  return (
    <div style={{ width: size, height: size, background: color, color: color.replace("74", "30") }} className={styles._}>
      {image ?
        <img src={image} width={size} height={size} />
        : <span className={styles.initial}>{initial}</span>}
    </div>
  )
}