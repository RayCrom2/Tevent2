import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
  {children} <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
</div>
  )
}

export default Alert