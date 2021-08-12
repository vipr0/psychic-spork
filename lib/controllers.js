import serviceRunner          from "./utils/serviceRunner.js";
import GetAuction             from "./services/Auction.js";
import GetBidder              from "./services/Bidder.js";
import LimitRequest           from "./services/LimitRequest.js";
import { redirectRender }     from "./utils/redirectRender.js";
import { limitRequestRender } from "./utils/limitRequestRender.js";

export default {
    getBidder:  serviceRunner.createServiceRunner(GetBidder, req => ({...req.query, ...req.params})),
    getAuction: serviceRunner.createServiceRunner(
        GetAuction, 
        req => ({...req.query, ...req.params}),
        redirectRender
    ),
    limitRequest: serviceRunner.createServiceRunner(
        LimitRequest, 
        req => ({...req.query, ...req.params}),
        limitRequestRender
    )
};