import Joi from "joi";

class GameModel {

    public id: number;
    public name: string;
    public description: string;
    public minAge: number;
    public maxAge: number;

    public constructor(game: GameModel) { // Copy-Constructor
        this.id = game.id;
        this.name = game.name;
        this.description = game.description;
        this.minAge = game.minAge;
        this.maxAge = game.maxAge;
    }

    // Model Validation: 

    // POST Validation Schema:
    private static postValidationSchema = Joi.object({
        id: Joi.forbidden(),
        name: Joi.string().required().min(2).max(50),
        description: Joi.string().required().min(10).max(1000),
        minAge: Joi.number().required().integer().min(0).max(20),
        maxAge: Joi.number().required().integer().min(3).max(120)
    });

    // PUT Validation Schema:
    private static putValidationSchema = Joi.object({
        id: Joi.number().required().integer().min(1),
        name: Joi.string().required().min(2).max(50),
        description: Joi.string().required().min(10).max(1000),
        minAge: Joi.number().required().integer().min(0).max(20),
        maxAge: Joi.number().required().integer().min(3).max(120)
    });

    // PATCH Validation Schema:
    private static patchValidationSchema = Joi.object({
        id: Joi.number().required().integer().min(1),
        name: Joi.string().optional().min(2).max(50),
        description: Joi.string().optional().min(10).max(1000),
        minAge: Joi.number().optional().integer().min(0).max(20),
        maxAge: Joi.number().optional().integer().min(3).max(120)
    });

    // Validate POST: 
    public validatePost(): string {
        // const result = GameModel.postValidationSchema.validate(this, { abortEarly: false })
        const result = GameModel.postValidationSchema.validate(this)
        return result.error?.message; // If no error - returns undefined.
    }

    // Validate PUT: 
    public validatePut(): string {
        const result = GameModel.putValidationSchema.validate(this)
        return result.error?.message; // If no error - returns undefined.
    }

    // Validate PATCH: 
    public validatePatch(): string {
        const result = GameModel.patchValidationSchema.validate(this)
        return result.error?.message; // If no error - returns undefined.
    }

}

export default GameModel;