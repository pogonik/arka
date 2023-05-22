import * as prismicT from "@prismicio/types";
import { PrismicLink } from "@prismicio/react";
import { Link } from "react-router-dom";

const RouterLink = props => {

  const fieldProps = {
    link_type: prismicT.LinkType.Document,
  	url: "/",
    id: "",
    uid: ''
  }

  const internalComp = (linkProps, { href }) => <Link to={href} {...linkProps} />

  return <PrismicLink field internalComponent={internalComp} />
}

export default RouterLink