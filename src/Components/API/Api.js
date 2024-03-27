import axios from "axios";

const API = axios.create({
  baseURL: "https://api.aspireprop.com/",
});
// const API = axios.create({
//     baseURL: "https://aspire-kappa.vercel.app/",
// });

// const API = axios.create({
//   baseURL: "https://aspire-kappa.vercel.app/",
// });

export const FetchPropertyData = () => API.get(`/prop/getAllProperty`);
export const FetchUSP = (data) => API.post(`/prop/getUsp`, data);
export const PostApplicationForm = (data) => API.post(`/cr/apply`, data);
export const FetchSinglePropertyData = (id) =>
  API.post(`/prop/getPropertyByName`, id);
export const FetchSingleDeveloperData = (id) =>
  API.post(`/dev/getDeveloperById`, id);
export const FetchCategoryBlog = (data) =>
  API.post(`/blog/getBlogsByCategory`, data);
export const FetchSingleBlog = (data) => API.post(`/blog/getBlogById`, data);
export const FetchFeatureBlog = () => API.get(`/blog/getFeaturedBlog`);
export const FetchTrendingLoans = () => API.get(`/ln/getAllLoan`);
export const FetchProject = () => API.get(`/prop/getFeaturedProperty`);
export const FetchSingleCareer = (data) => API.post(`/cr/getCareerById`, data);

export const PostrequirementData = (data) =>
  API.post(`/prop/addRequirement`, data);
export const PostEligilityData = (data) => API.post(`/ln/addEligibility`, data);
export const PostGetintouchData = (data) => API.post(`/cn/addContacts`, data);
export const PostTalkToExpertData = (data) => API.post(`cn/addExpert`, data);
export const PostPriceData = (data) => API.post(`/cn/addForm`, data);
export const PostQuote = (data) => API.post(`/cn/addForm`, data);

export const RegisterData = (data) => API.post("/cn/passcode", data);
export const ProjectEnquiry = (data) =>
  API.post("/cn/addNewLaunchEnquiry", data);
export const RegisterDataBrochure = (data) => API.post("/cn/addBroucher", data);

export const ImageEmailData = (data) => API.post("/cn/emailpass", data);

export const FestEnquiry = (data) => API.post("/cn/addFestEnquiry", data);
export const AddEnquiry = (data) => API.post("/cn/addEnquire", data);
