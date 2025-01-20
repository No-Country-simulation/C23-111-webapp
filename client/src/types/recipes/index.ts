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
    'id'?: string,
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


