"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Edit=void 0;const i18n_1=require("@wordpress/i18n"),block_templates_1=require("@woocommerce/block-templates"),element_1=require("@wordpress/element"),components_1=require("@wordpress/components"),compose_1=require("@wordpress/compose"),core_data_1=require("@wordpress/core-data"),tags_field_1=require("../../../components/tags-field");function Edit({attributes:e,context:o}){const t=(0,block_templates_1.useWooBlockProps)(e),{name:r,label:s,placeholder:c}=e,[a,n]=(0,core_data_1.useEntityProp)("postType",o.postType||"product",r||"tags"),l=(0,compose_1.useInstanceId)(components_1.BaseControl,"tag-field");return(0,element_1.createElement)("div",{...t},(0,element_1.createElement)(tags_field_1.TagField,{id:l,label:s||(0,i18n_1.__)("Tags","woocommerce"),placeholder:c||(0,i18n_1.__)("Search or create tags…","woocommerce"),onChange:n,value:a||[]}))}exports.Edit=Edit;