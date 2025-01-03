import { User } from 'src/database/entities/user/user.entity';
import { LikeService } from './like.service';
export declare class LikeController {
    private likeService;
    constructor(likeService: LikeService);
    findLikedProducts(user: User): Promise<import("../database/entities/product/product.entity").Product[]>;
}
