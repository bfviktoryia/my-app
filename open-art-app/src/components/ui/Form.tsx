import '../ui/Form.scss';

type FormType = {
  header?: string;
  className?: string,
  children: React.ReactNode;
};


const Form: React.FC<FormType> = ({ header, children }) => {
  return (
    <form className="form-wrap">
        {header && 
            <div className="form-header">
                {header}
            </div>}
        {children}
    </form>
  );
};

export default Form;