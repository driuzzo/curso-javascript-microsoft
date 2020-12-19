let json = '{"age": 30}';

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Dado incompleto: sem nome");
    }

    console.log(user.name);
} catch(e) {
    console.log("Erro JSON: " + e.message);
}
