class User{
    name: {
        first: string,
        last: string
    };
    img: string;

    constructor(firstName: string,lastName: string,image: string){
        this.name = {
            first: firstName,
            last: lastName
        };
        this.img = image;

    }
}

export default User;