export interface LuLinkProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconColor?: string
  iconSize?: string | number
}
