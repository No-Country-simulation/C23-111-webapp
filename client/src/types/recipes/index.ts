export type recipesResponseData = {
    'message': string,
    'result': [{
        'id': string,
        'name': string,
        'description': string,
        'category': string[],
        'ingredients': string[],
        'totalSteps': number,
        'image': string,
        'rateAverage': number,
        'totalRates': number,
        'createdAt': string
    }]
}

export type recipe = {
    'id': string,
    'name': string,
    'description': string,
    'category'?: string[],
    'ingredients': string[],
    'totalSteps': number,
    'image': string,
    'rateAverage': number,
    'totalRates': number,
    'createdAt'?: string
}

type rates = {
    _id: string,
    rating: number,
    comment: string,
    reviewer: string,
    recipe: string,
    createdAt: string,
    updatedAt: string
}

export type recipeWithRates = {
    status: string,
    userId: string,
    totalRates: number,
    _id: string,
    name: string,
    description: string,
    category: string[],
    ingredients: string[],
    steps: string[],
    image: string,
    rateAverage: number,
    createdAt: string,
    rates: rates[]
}


