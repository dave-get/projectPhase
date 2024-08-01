interface ButtonProps {
    onClickHandler: () => void;
    label: string;
}
export const Button:React.FC<ButtonProps> = ( { onClickHandler,label } ) => {
  return (
    <button className="but" onClick={onClickHandler}>
        {label}
    </button>
  )
}
