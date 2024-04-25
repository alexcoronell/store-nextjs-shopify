interface CategoryProps {
  params: {
    category: string;
    searchParams?: string;
  };
}
export default function Category(props: CategoryProps) {
  console.log(props);
  const { category } = props.params;
  console.log(category);
  return <h1>Dinamic Category: {category}</h1>;
}
