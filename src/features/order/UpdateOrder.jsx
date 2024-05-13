import { useFetcher } from "react-router-dom";
import Button from "../../global/Button";

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.form>
  );
}

asycn function action(request,params){
    return null

}
