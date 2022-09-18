import installer from './defaults'
export * from '@element-plus/components'
export * from '@element-plus/constants'
export * from '@element-plus/directives'
export * from '@element-plus/hooks'
export * from '@element-plus/tokens'
export * from './make-installer'

export const install = installer.install
export default installer

export { default as dayjs } from 'dayjs'
