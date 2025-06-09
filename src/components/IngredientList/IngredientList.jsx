const IngredientList = (props) => {
    return (
        <>
            <ul>
                {props.Ingredients.map((ingredient, index) => (
                    <li key={index}
                        onClick={() => props.addToBurger(ingredient)}
                        style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default IngredientList;