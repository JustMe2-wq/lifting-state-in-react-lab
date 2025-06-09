const Ingredient = (addburger) => {
    const { name, color } = addburger;

    return (
        <>
            <ul>
                <li
                    onClick={() => addburger.addToBurger({ name, color })}
                    style={{ backgroundColor: color }}
                >
                    {name}
                </li>
            </ul>
        </>
    );
}

export default Ingredient;