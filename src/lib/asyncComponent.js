import Loadable from "react-loadable";
import Loading from "components/core/Loading";

export default function asyncComponent(importComponent) {
  return Loadable({
    loader: importComponent,
    loading: Loading,
    delay: 200
  });
}
