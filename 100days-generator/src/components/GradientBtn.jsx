const GradientBtn = (props) => {
  const { action, content, ...rest } = props;

  return (
    <button
      type="button"
      className="text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-full py-2 mb-2"
      onClick={action}
      {...rest}
    >
      {content}
    </button>
  );
};

export default GradientBtn;
