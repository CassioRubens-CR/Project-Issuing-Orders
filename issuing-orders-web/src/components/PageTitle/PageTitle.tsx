import "./PageTitle.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <h2 className="page-title">{title}</h2>;
};

export default PageTitle;
