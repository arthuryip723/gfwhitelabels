const Urls=(function(){var Urls={};var self={url_patterns:{}};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self.url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return'/'+url;};};var name,pattern,self,url_patterns,_i,_len,_ref;url_patterns=[['account_change_password',[['accounts/password/change/',[]]],],['account_confirm_email',[['accounts/confirm\u002Demail/%(key)s/',['key',],],['rest\u002Dauth/registration/account\u002Dconfirm\u002Demail/%(key)s/',['key',],],['rest\u002Dauth/registration/account\u002Dconfirm\u002Demail/%(key)s/',['key',],],['rest\u002Dauth/registration/account\u002Dconfirm\u002Demail/%(key)s/',['key',]]],],['account_email',[['accounts/email/',[]]],],['account_email_verification_sent',[['accounts/confirm\u002Demail/',[],],['confirm/',[]]],],['account_inactive',[['accounts/inactive/',[]]],],['account_login',[['accounts/login/',[]]],],['account_logout',[['accounts/logout/',[]]],],['account_reset_password',[['accounts/password/reset/',[]]],],['account_reset_password_done',[['accounts/password/reset/done/',[]]],],['account_reset_password_from_key',[['accounts/password/reset/key/%(uidb36)s\u002D%(key)s/',['uidb36','key',]]],],['account_reset_password_from_key_done',[['accounts/password/reset/key/done/',[]]],],['account_set_password',[['accounts/password/set/',[]]],],['account_signup',[['accounts/signup/',[]]],],['admin:account_emailaddress_add',[['admin/account/emailaddress/add/',[]]],],['admin:account_emailaddress_change',[['admin/account/emailaddress/%(_0)s/change/',['_0',]]],],['admin:account_emailaddress_changelist',[['admin/account/emailaddress/',[]]],],['admin:account_emailaddress_delete',[['admin/account/emailaddress/%(_0)s/delete/',['_0',]]],],['admin:account_emailaddress_history',[['admin/account/emailaddress/%(_0)s/history/',['_0',]]],],['admin:account_emailconfirmation_add',[['admin/account/emailconfirmation/add/',[]]],],['admin:account_emailconfirmation_change',[['admin/account/emailconfirmation/%(_0)s/change/',['_0',]]],],['admin:account_emailconfirmation_changelist',[['admin/account/emailconfirmation/',[]]],],['admin:account_emailconfirmation_delete',[['admin/account/emailconfirmation/%(_0)s/delete/',['_0',]]],],['admin:account_emailconfirmation_history',[['admin/account/emailconfirmation/%(_0)s/history/',['_0',]]],],['admin:app_list',[['admin/%(app_label)s/',['app_label',]]],],['admin:auth_group_add',[['admin/auth/group/add/',[]]],],['admin:auth_group_change',[['admin/auth/group/%(_0)s/change/',['_0',]]],],['admin:auth_group_changelist',[['admin/auth/group/',[]]],],['admin:auth_group_delete',[['admin/auth/group/%(_0)s/delete/',['_0',]]],],['admin:auth_group_history',[['admin/auth/group/%(_0)s/history/',['_0',]]],],['admin:auth_user_password_change',[['admin/users/user/%(_0)s/password/',['_0',]]],],['admin:authtoken_token_add',[['admin/authtoken/token/add/',[]]],],['admin:authtoken_token_change',[['admin/authtoken/token/%(_0)s/change/',['_0',]]],],['admin:authtoken_token_changelist',[['admin/authtoken/token/',[]]],],['admin:authtoken_token_delete',[['admin/authtoken/token/%(_0)s/delete/',['_0',]]],],['admin:authtoken_token_history',[['admin/authtoken/token/%(_0)s/history/',['_0',]]],],['admin:campaigns_campaign_add',[['admin/campaigns/campaign/add/',[]]],],['admin:campaigns_campaign_change',[['admin/campaigns/campaign/%(_0)s/change/',['_0',]]],],['admin:campaigns_campaign_changelist',[['admin/campaigns/campaign/',[]]],],['admin:campaigns_campaign_delete',[['admin/campaigns/campaign/%(_0)s/delete/',['_0',]]],],['admin:campaigns_campaign_history',[['admin/campaigns/campaign/%(_0)s/history/',['_0',]]],],['admin:companies_company_add',[['admin/companies/company/add/',[]]],],['admin:companies_company_change',[['admin/companies/company/%(_0)s/change/',['_0',]]],],['admin:companies_company_changelist',[['admin/companies/company/',[]]],],['admin:companies_company_delete',[['admin/companies/company/%(_0)s/delete/',['_0',]]],],['admin:companies_company_history',[['admin/companies/company/%(_0)s/history/',['_0',]]],],['admin:django_summernote_attachment_add',[['admin/django_summernote/attachment/add/',[]]],],['admin:django_summernote_attachment_change',[['admin/django_summernote/attachment/%(_0)s/change/',['_0',]]],],['admin:django_summernote_attachment_changelist',[['admin/django_summernote/attachment/',[]]],],['admin:django_summernote_attachment_delete',[['admin/django_summernote/attachment/%(_0)s/delete/',['_0',]]],],['admin:django_summernote_attachment_history',[['admin/django_summernote/attachment/%(_0)s/history/',['_0',]]],],['admin:emailer_emailtemplate_add',[['admin/emailer/emailtemplate/add/',[]]],],['admin:emailer_emailtemplate_change',[['admin/emailer/emailtemplate/%(_0)s/change/',['_0',]]],],['admin:emailer_emailtemplate_changelist',[['admin/emailer/emailtemplate/',[]]],],['admin:emailer_emailtemplate_delete',[['admin/emailer/emailtemplate/%(_0)s/delete/',['_0',]]],],['admin:emailer_emailtemplate_history',[['admin/emailer/emailtemplate/%(_0)s/history/',['_0',]]],],['admin:filer\u002Dajax_upload',[['admin/filer/clipboard/operations/upload/no_folder/',[],],['admin/filer/clipboard/operations/upload/%(folder_id)s/',['folder_id',]]],],['admin:filer\u002Ddelete_clipboard',[['admin/filer/clipboard/operations/delete_clipboard/',[]]],],['admin:filer\u002Ddirectory_listing',[['admin/filer/folder/%(folder_id)s/list/',['folder_id',]]],],['admin:filer\u002Ddirectory_listing\u002Dimages_with_missing_data',[['admin/filer/folder/images_with_missing_data/',[]]],],['admin:filer\u002Ddirectory_listing\u002Dlast',[['admin/filer/folder/last/',[]]],],['admin:filer\u002Ddirectory_listing\u002Dmake_folder',[['admin/filer/folder/%(folder_id)s/make_folder/',['folder_id',]]],],['admin:filer\u002Ddirectory_listing\u002Dmake_root_folder',[['admin/filer/folder/make_folder/',[]]],],['admin:filer\u002Ddirectory_listing\u002Droot',[['admin/filer/folder/',[]]],],['admin:filer\u002Ddirectory_listing\u002Dunfiled_images',[['admin/filer/folder/unfiled_images/',[]]],],['admin:filer\u002Ddiscard_clipboard',[['admin/filer/clipboard/operations/discard_clipboard/',[]]],],['admin:filer\u002Dpaste_clipboard_to_folder',[['admin/filer/clipboard/operations/paste_clipboard_to_folder/',[]]],],['admin:filer_clipboard_add',[['admin/filer/clipboard/add/',[]]],],['admin:filer_clipboard_change',[['admin/filer/clipboard/%(_0)s/change/',['_0',]]],],['admin:filer_clipboard_changelist',[['admin/filer/clipboard/',[]]],],['admin:filer_clipboard_delete',[['admin/filer/clipboard/%(_0)s/delete/',['_0',]]],],['admin:filer_clipboard_history',[['admin/filer/clipboard/%(_0)s/history/',['_0',]]],],['admin:filer_file_add',[['admin/filer/file/add/',[]]],],['admin:filer_file_change',[['admin/filer/file/%(_0)s/change/',['_0',]]],],['admin:filer_file_changelist',[['admin/filer/file/',[]]],],['admin:filer_file_delete',[['admin/filer/file/%(_0)s/delete/',['_0',]]],],['admin:filer_file_history',[['admin/filer/file/%(_0)s/history/',['_0',]]],],['admin:filer_folder_add',[['admin/filer/folder/add/',[]]],],['admin:filer_folder_change',[['admin/filer/folder/%(_0)s/change/',['_0',]]],],['admin:filer_folder_changelist',[['admin/filer/folder/',[]]],],['admin:filer_folder_delete',[['admin/filer/folder/%(_0)s/delete/',['_0',]]],],['admin:filer_folder_history',[['admin/filer/folder/%(_0)s/history/',['_0',]]],],['admin:filer_folderpermission_add',[['admin/filer/folderpermission/add/',[]]],],['admin:filer_folderpermission_change',[['admin/filer/folderpermission/%(_0)s/change/',['_0',]]],],['admin:filer_folderpermission_changelist',[['admin/filer/folderpermission/',[]]],],['admin:filer_folderpermission_delete',[['admin/filer/folderpermission/%(_0)s/delete/',['_0',]]],],['admin:filer_folderpermission_history',[['admin/filer/folderpermission/%(_0)s/history/',['_0',]]],],['admin:filer_image_add',[['admin/filer/image/add/',[]]],],['admin:filer_image_change',[['admin/filer/image/%(_0)s/change/',['_0',]]],],['admin:filer_image_changelist',[['admin/filer/image/',[]]],],['admin:filer_image_delete',[['admin/filer/image/%(_0)s/delete/',['_0',]]],],['admin:filer_image_history',[['admin/filer/image/%(_0)s/history/',['_0',]]],],['admin:flatpages_flatpage_add',[['admin/flatpages/flatpage/add/',[]]],],['admin:flatpages_flatpage_change',[['admin/flatpages/flatpage/%(_0)s/change/',['_0',]]],],['admin:flatpages_flatpage_changelist',[['admin/flatpages/flatpage/',[]]],],['admin:flatpages_flatpage_delete',[['admin/flatpages/flatpage/%(_0)s/delete/',['_0',]]],],['admin:flatpages_flatpage_history',[['admin/flatpages/flatpage/%(_0)s/history/',['_0',]]],],['admin:formc_formc_add',[['admin/formc/formc/add/',[]]],],['admin:formc_formc_change',[['admin/formc/formc/%(_0)s/change/',['_0',]]],],['admin:formc_formc_changelist',[['admin/formc/formc/',[]]],],['admin:formc_formc_delete',[['admin/formc/formc/%(_0)s/delete/',['_0',]]],],['admin:formc_formc_history',[['admin/formc/formc/%(_0)s/history/',['_0',]]],],['admin:index',[['admin/',[]]],],['admin:investment_investment_add',[['admin/investment/investment/add/',[]]],],['admin:investment_investment_change',[['admin/investment/investment/%(_0)s/change/',['_0',]]],],['admin:investment_investment_changelist',[['admin/investment/investment/',[]]],],['admin:investment_investment_delete',[['admin/investment/investment/%(_0)s/delete/',['_0',]]],],['admin:investment_investment_history',[['admin/investment/investment/%(_0)s/history/',['_0',]]],],['admin:jsi18n',[['admin/jsi18n/',[]]],],['admin:login',[['admin/login/',[]]],],['admin:logout',[['admin/logout/',[]]],],['admin:page_contentitem_add',[['admin/page/contentitem/add/',[]]],],['admin:page_contentitem_change',[['admin/page/contentitem/%(_0)s/change/',['_0',]]],],['admin:page_contentitem_changelist',[['admin/page/contentitem/',[]]],],['admin:page_contentitem_delete',[['admin/page/contentitem/%(_0)s/delete/',['_0',]]],],['admin:page_contentitem_history',[['admin/page/contentitem/%(_0)s/history/',['_0',]]],],['admin:page_page_add',[['admin/page/page/add/',[]]],],['admin:page_page_change',[['admin/page/page/%(_0)s/change/',['_0',]]],],['admin:page_page_changelist',[['admin/page/page/',[]]],],['admin:page_page_delete',[['admin/page/page/%(_0)s/delete/',['_0',]]],],['admin:page_page_history',[['admin/page/page/%(_0)s/history/',['_0',]]],],['admin:password_change',[['admin/password_change/',[]]],],['admin:password_change_done',[['admin/password_change/done/',[]]],],['admin:sites_site_add',[['admin/sites/site/add/',[]]],],['admin:sites_site_change',[['admin/sites/site/%(_0)s/change/',['_0',]]],],['admin:sites_site_changelist',[['admin/sites/site/',[]]],],['admin:sites_site_delete',[['admin/sites/site/%(_0)s/delete/',['_0',]]],],['admin:sites_site_history',[['admin/sites/site/%(_0)s/history/',['_0',]]],],['admin:socialaccount_socialaccount_add',[['admin/socialaccount/socialaccount/add/',[]]],],['admin:socialaccount_socialaccount_change',[['admin/socialaccount/socialaccount/%(_0)s/change/',['_0',]]],],['admin:socialaccount_socialaccount_changelist',[['admin/socialaccount/socialaccount/',[]]],],['admin:socialaccount_socialaccount_delete',[['admin/socialaccount/socialaccount/%(_0)s/delete/',['_0',]]],],['admin:socialaccount_socialaccount_history',[['admin/socialaccount/socialaccount/%(_0)s/history/',['_0',]]],],['admin:socialaccount_socialapp_add',[['admin/socialaccount/socialapp/add/',[]]],],['admin:socialaccount_socialapp_change',[['admin/socialaccount/socialapp/%(_0)s/change/',['_0',]]],],['admin:socialaccount_socialapp_changelist',[['admin/socialaccount/socialapp/',[]]],],['admin:socialaccount_socialapp_delete',[['admin/socialaccount/socialapp/%(_0)s/delete/',['_0',]]],],['admin:socialaccount_socialapp_history',[['admin/socialaccount/socialapp/%(_0)s/history/',['_0',]]],],['admin:socialaccount_socialtoken_add',[['admin/socialaccount/socialtoken/add/',[]]],],['admin:socialaccount_socialtoken_change',[['admin/socialaccount/socialtoken/%(_0)s/change/',['_0',]]],],['admin:socialaccount_socialtoken_changelist',[['admin/socialaccount/socialtoken/',[]]],],['admin:socialaccount_socialtoken_delete',[['admin/socialaccount/socialtoken/%(_0)s/delete/',['_0',]]],],['admin:socialaccount_socialtoken_history',[['admin/socialaccount/socialtoken/%(_0)s/history/',['_0',]]],],['admin:users_user_add',[['admin/users/user/add/',[]]],],['admin:users_user_change',[['admin/users/user/%(_0)s/change/',['_0',]]],],['admin:users_user_changelist',[['admin/users/user/',[]]],],['admin:users_user_delete',[['admin/users/user/%(_0)s/delete/',['_0',]]],],['admin:users_user_history',[['admin/users/user/%(_0)s/history/',['_0',]]],],['admin:view_on_site',[['admin/r/%(content_type_id)s/%(object_id)s/',['content_type_id','object_id',]]],],['api\u002Droot',[['api/.%(format)s',['format',],],['api/',[]]],],['calculators:calculators',[['calculators/list',[]]],],['calculators:create_established_business',[['calculators/create_established_business',[]]],],['calculators:create_payback',[['calculators/create_payback',[]]],],['calculators:create_startup',[['calculators/create_startup',[]]],],['calculators:established_business_list',[['calculators/established_business',[]]],],['calculators:payback_list',[['calculators/payback',[]]],],['calculators:startup_list',[['calculators/startup',[]]],],['campaign\u002Ddetail',[['api/campaign/%(pk)s.%(format)s',['pk','format',],],['api/campaign/%(pk)s',['pk',],],['api/campaign/perks/%(pk)s.%(format)s',['pk','format',],],['api/campaign/perks/%(pk)s',['pk',],],['api/campaign/specifics/%(pk)s.%(format)s',['pk','format',],],['api/campaign/specifics/%(pk)s',['pk',],],['api/campaign/team_members/%(pk)s.%(format)s',['pk','format',],],['api/campaign/team_members/%(pk)s',['pk',],],['api/campaign/media/%(pk)s.%(format)s',['pk','format',],],['api/campaign/media/%(pk)s',['pk',],],['api/campaign/general_information/%(pk)s.%(format)s',['pk','format',],],['api/campaign/general_information/%(pk)s',['pk',]]],],['campaign\u002Dinvest',[['api/campaign/%(pk)s/invest.%(format)s',['pk','format',],],['api/campaign/%(pk)s/invest',['pk',]]],],['campaign\u002Dlist',[['api/campaign.%(format)s',['format',],],['api/campaign',[],],['api/campaign/perks.%(format)s',['format',],],['api/campaign/perks',[],],['api/campaign/specifics.%(format)s',['format',],],['api/campaign/specifics',[],],['api/campaign/team_members.%(format)s',['format',],],['api/campaign/team_members',[],],['api/campaign/media.%(format)s',['format',],],['api/campaign/media',[],],['api/campaign/general_information.%(format)s',['format',],],['api/campaign/general_information',[]]],],['comment\u002Ddetail',[['api/comment/%(pk)s.%(format)s',['pk','format',],],['api/comment/%(pk)s',['pk',]]],],['comment\u002Dlist',[['api/comment.%(format)s',['format',],],['api/comment',[]]],],['comments\u002Dapprove',[['comments/approve/%(_0)s/',['_0',]]],],['comments\u002Dapprove\u002Ddone',[['comments/approved/',[]]],],['comments\u002Dcomment\u002Ddone',[['comments/posted/',[]]],],['comments\u002Ddelete',[['comments/delete/%(_0)s/',['_0',]]],],['comments\u002Ddelete\u002Ddone',[['comments/deleted/',[]]],],['comments\u002Dflag',[['comments/flag/%(_0)s/',['_0',]]],],['comments\u002Dflag\u002Ddone',[['comments/flagged/',[]]],],['comments\u002Dpost\u002Dcomment',[['comments/post/',[]]],],['comments\u002Durl\u002Dredirect',[['comments/cr/%(_0)s/%(_1)s/',['_0','_1',]]],],['comments:list',[['comments/%(id)s/respond/',['id',],],['comments/%(id)s/campaign/',['id',]]],],['companies:create',[['companies/create/',[]]],],['companies:detail',[['companies/%(pk)s/',['pk',]]],],['companies:list',[['companies/',[]]],],['companies:update',[['companies/update/%(pk)s/',['pk',]]],],['company\u002Ddetail',[['api/company/%(pk)s.%(format)s',['pk','format',],],['api/company/%(pk)s',['pk',]]],],['company\u002Dlist',[['api/company.%(format)s',['format',],],['api/company',[]]],],['django.contrib.flatpages.views.flatpage',[['pages/%(url)s',['url',]]],],['djdt:render_panel',[['__debug__/render_panel/',[]]],],['djdt:sql_explain',[['__debug__/sql_explain/',[]]],],['djdt:sql_profile',[['__debug__/sql_profile/',[]]],],['djdt:sql_select',[['__debug__/sql_select/',[]]],],['djdt:template_source',[['__debug__/template_source/',[]]],],['email\u002Dsent',[['email_sent/',[]]],],['facebook_callback',[['accounts/facebook/login/callback/',[]]],],['facebook_login',[['accounts/facebook/login/',[]]],],['facebook_login_by_token',[['accounts/facebook/login/token/',[]]],],['fb_login',[['rest\u002Dauth/facebook/',[],],['rest\u002Dauth/facebook/',[]]],],['file2\u002Dlist',[['api2/files',[]]],],['formc\u002Ddetail',[['api/formc/introduction/%(pk)s.%(format)s',['pk','format',],],['api/formc/introduction/%(pk)s',['pk',]]],],['formc\u002Dlist',[['api/formc/introduction.%(format)s',['format',],],['api/formc/introduction',[]]],],['google_callback',[['accounts/google/login/callback/',[]]],],['google_login',[['accounts/google/login/',[],],['rest\u002Dauth/google/',[],],['rest\u002Dauth/google/',[]]],],['image2\u002Ddelete',[['api2/images/%(pk)s',['pk',]]],],['image2\u002Dlist',[['api2/images',[]]],],['investment\u002Ddetail',[['api/investment/%(pk)s.%(format)s',['pk','format',],],['api/investment/%(pk)s',['pk',]]],],['investment\u002Dlist',[['api/investment.%(format)s',['format',],],['api/investment',[]]],],['js_reverse',[['jsreverse/',[]]],],['linkedin_login',[['rest\u002Dauth/linkedin/',[],],['rest\u002Dauth/linkedin/',[]]],],['linkedin_oauth2_callback',[['accounts/linkedin_oauth2/login/callback/',[]]],],['linkedin_oauth2_login',[['accounts/linkedin_oauth2/login/',[]]],],['page\u002Ddetail',[['api/page/%(pk)s.%(format)s',['pk','format',],],['api/page/%(pk)s',['pk',]]],],['page\u002Dlist',[['api/page.%(format)s',['format',],],['api/page',[]]],],['payment_api:proxy_request',[['payment_api/%(type)s/%(id)s',['type','id',]]],],['proxy_view',[['proxy/',[]]],],['rest_login',[['rest\u002Dauth/login/',[],],['rest\u002Dauth/login/',[]]],],['rest_logout',[['rest\u002Dauth/logout/',[],],['rest\u002Dauth/logout/',[]]],],['rest_password_change',[['rest\u002Dauth/password/change/',[],],['rest\u002Dauth/password/change/',[]]],],['rest_password_reset',[['rest\u002Dauth/password/reset/',[],],['rest\u002Dauth/password/reset/',[]]],],['rest_password_reset_confirm',[['rest\u002Dauth/password/reset/confirm/',[],],['rest\u002Dauth/password/reset/confirm/',[]]],],['rest_register',[['rest\u002Dauth/registration/',[],],['rest\u002Dauth/registration/',[]]],],['rest_user_details',[['rest\u002Dauth/user/',[],],['rest\u002Dauth/user/',[],],['rest\u002Dauth/user/',[]]],],['rest_verify_email',[['rest\u002Dauth/registration/verify\u002Demail/',[],],['rest\u002Dauth/registration/verify\u002Demail/',[]]],],['socialaccount_connections',[['accounts/social/connections/',[]]],],['socialaccount_login_cancelled',[['accounts/social/login/cancelled/',[]]],],['socialaccount_login_error',[['accounts/social/login/error/',[]]],],['socialaccount_signup',[['accounts/social/signup/',[]]],],['thumb2\u002Dlist',[['api2/thumbnail/%(pk)s',['pk',]]],],['user:image_uploader',[['user/image_uploader/',[]]],],['user:investor_dashboard',[['user/investor_dashboard/',[]]],],['user:issuer_dashboard',[['user/issuer_dashboard/',[]]],],['user:profile',[['user/profile/',[]]],],['user:update_password',[['user/update_password/',[]]],],['user:update_profile',[['user/update_profile/',[]]]]];self.url_patterns={};for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self.url_patterns[name]=pattern;Urls[name]=_get_url(name);Urls[name.replace(/-/g,'_')]=_get_url(name);}
return Urls;})();

module.exports = Urls;
