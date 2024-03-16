import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function App() {

  return (
    <div className="grid col-span-4  flex-col flex-wrap gap-4 w-full justify-center items-center">
        <Breadcrumbs size="lg">
          <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/pilots">Pilots</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/airports-and-charts/denmark">Denmark</a></BreadcrumbItem>
        </Breadcrumbs>
    </div>
  );
}
