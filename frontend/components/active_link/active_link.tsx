import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Children, useEffect, useState } from 'react'

type ActiveLinksProps = {
  children: JSX.Element,
  href: string,
  activeClassName?: string
  as?: string
}

const ActiveLink = ({ children, activeClassName, href, ...props }: ActiveLinksProps): JSX.Element => {
  const router = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    if (router.isReady) {
      if (router.asPath === href || (props.as && router.asPath === props.as)) {
        setClassName(`${childClassName} ${activeClassName}`.trim())
      } else {
        setClassName(childClassName)
      }
    }
  }, [router.isReady, activeClassName, childClassName, href, props.as, router.asPath])

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}


export default ActiveLink