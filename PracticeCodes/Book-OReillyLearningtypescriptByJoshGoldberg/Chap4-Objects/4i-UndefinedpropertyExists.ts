type Writers = {
    author:string | undefined;
    editor?:string;
};

const hasRequired : Writers = {
    author:undefined,
};
// const missingRequired : Writers = {}; (will give eror as author even as undefined is required)