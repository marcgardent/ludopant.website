export interface ProgressModel {
  name : string,
  progress : string
}
export interface DashboardModel {
  title : string,
  cover : string,
  status  : string,
  details : Array<ProgressModel>
}
