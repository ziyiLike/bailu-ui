export interface LuButtonProps {
  type?: 'default'|'primary' | 'success' | 'warning' | 'danger';
  size?: 'mini' | 'small' | 'default' | 'large';
  shape?: 'default' | 'circle' | 'round';
  plain?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: string | number;
}