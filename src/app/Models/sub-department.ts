export interface SubDepartment {
  _id: object;
  parentID: string; // or mongoose.Types.ObjectId, if you're using mongoose in your Angular app
  name: {
    ar: string;
    en: string;
  };
}
