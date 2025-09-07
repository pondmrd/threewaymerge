interface MergeSortedCollections {
    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
}

export class Merge3Collection implements MergeSortedCollections {
    constructor() { }

    merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
        // Since collection_1 is already descending, sort it to ascending 
        collection_1 = this.reverseArray(collection_1)

        let merge_1: number[] = this.two_way_merge(collection_1, collection_2)
        let merge_2: number[] = this.two_way_merge(merge_1, collection_3)

        return merge_2
    }

    reverseArray(collection_1: number[]): number[] {
        const new_collection: number[] = []
        for (let i = collection_1.length - 1; i >= 0; i--) {
            new_collection.push(collection_1[i]!)
        }
        return new_collection
    }

    two_way_merge(collection_1: number[], collection_2: number[]): number[] {
        let merged: number[] = [];
        let i: number = 0;
        let j: number = 0;

        while (i < collection_1.length && j < collection_2.length) {
            if (collection_1[i]! < collection_2[j]!) {
                merged.push(collection_1[i]!);
                i++;
            } else {
                merged.push(collection_2[j]!);
                j++;
            }
        }

        while (i < collection_1.length) {
            merged.push(collection_1[i]!);
            i++;
        }

        while (j < collection_2.length) {
            merged.push(collection_2[j]!);
            j++;
        }

        return merged;
    }
}

