// function asyncErrorBoundary(delegate, defaultStatus) {
//     return (request, response, next) => {
//         Promise.resolve()
//             .then(() => delegate(request, response, next))
//             .catch((error = {}) => {
//                 const { status = defaultStatus, message = error } = error;
//                 next({
//                     status,
//                     message,
//                 });
//             });
//     };
// }



//returns middleware function
//      returning a promise obj (resolved, to kick of a promise chain)  async await is just syntaxtical sugar
//      then try the delegate function
//      catch error


// function asyncErrorBoundary(delegate, defaultStatus) {
//   return async (request, response, next) => {
//     try { await delegate(request, response, next);
//     } catch {
//       const { status = defaultStatus, message = error } = error;
//       next({
//         status,
//         message,
//       });
//     }
//   };
// }

module.exports = asyncErrorBoundary;

function asyncErrorBoundary(delegate, defaultStatus) {
    return (req, res, next) => {
        (async () => {
                    try {
                        await delegate(req, res, next)
                    } catch (error) {
                        const { status = defaultStatus, message = error } = error;
                            next({
                                status,
                                message,
                            });
                    }
            })()
        }
}

module.exports = asyncErrorBoundary;