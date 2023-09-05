
      </b:if>
      <b:include data='blog' name='google-analytics'/>

      <script async='async' src='https://www.gstatic.com/external_hosted/clipboardjs/clipboard.min.js'/>
    </head>

    <body>
      <b:class cond='data:view.isPreview' name='preview'/>
      <b:class cond='data:view.isMultipleItems' name='feed-view'/>
      <b:class cond='data:view.isSingleItem' name='item-view'/>
      <b:class cond='data:view.isArchive' name='archive-view'/>
      <b:class cond='data:view.isLabelSearch' name='label-view'/>
      <b:class cond='data:view.isSearch and !data:view.isLabelSearch' name='search-view'/>
      <b:class cond='data:view.isError' name='error-view'/>
      <b:class name='version-1-3-3'/>

      <b:include name='skipNavigation'/>
      <div class='page'>
        <b:with value='data:widgets.AdSense any (w =&gt; w.sectionId == &quot;ads&quot;)' var='hasVerticalAds'>
          <div class='page_body'>
            <b:class cond='data:hasVerticalAds' name='has-vertical-ads'/>

            <b:if cond='data:view.isSingleItem'>
              <b:if cond='data:widgets.Blog.first.posts.first.featuredImage'>
                <b:include data='{                                  image: data:widgets.Blog.first.posts.first.featuredImage,                                  selector: &quot;.bg-photo&quot;                                }' name='responsiveImageStyle'/>
                <div class='bg-photo-container'>
                  <div class='bg-photo'/>
                </div>
              </b:if>
            </b:if>
            <div class='centered'>
              <b:if cond='not data:view.isSingleItem'>
                <div class='centered-top-placeholder'/>
              </b:if>
              <header class='centered-top-container' role='banner'>
                <b:class cond='data:view.isSingleItem' name='sticky'/>
                <div class='centered-top'>
                  <b:class cond='data:view.isSearch and data:view.search.query' name='search-focused'/>

                  <b:if cond='data:view.isSingleItem'>
                    <a class='return_link' expr:href='data:blog.homepageUrl'>
                      <b:include data='{ iconClass: &quot;touch-icon back-button rtl-reversible-icon&quot; }' name='backArrowIcon'/>
                    </a>
                  <b:else/>
                    <div class='hamburger-section'>
                      <b:include data='{ iconClass: &quot;touch-icon hamburger-menu&quot; }' name='menuIcon'/>
                    </div>
                  </b:if>

                  <div class='blog-name'>
                    <b:section id='header' name='Header' showaddelement='false'>
                      <b:widget id='Header1' locked='true' title='Ayurvedic Aura (Header)' type='Header' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='displayUrl'/>
                          <b:widget-setting name='displayHeight'>0</b:widget-setting>
                          <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
                          <b:widget-setting name='useImage'>false</b:widget-setting>
                          <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                          <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
                          <b:widget-setting name='displayWidth'>0</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main' var='this'>
      <div class='header-widget'>
        <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
        <b:include cond='data:imagePlacement not in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='title'/>
        <b:include cond='data:imagePlacement != &quot;REPLACE&quot;' name='description'/>
      </div>
      <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='behindImageStyle'/>
    </b:includable>
                        <b:includable id='behindImageStyle'>
      <b:if cond='data:sourceUrl'>
        <b:include cond='data:this.image' data='{                    image: data:this.image,                    selector: &quot;.header-widget&quot;                  }' name='responsiveImageStyle'/>
        <style type='text/css'>
          .header-widget {
            background-position: <data:blog.locale.languageAlignment/>;
            background-repeat: no-repeat;
            background-size: cover;
          }
        </style>
      </b:if>
    </b:includable>
                        <b:includable id='description'>
            <!-- Don't show description on the item page -->
            <b:include cond='not data:view.isSingleItem' name='super.description'/>
          </b:includable>
                        <b:includable id='image'>
            <b:include name='super.image'/>
            <!-- If we are replacing the title, force it to render anyway, and it'll be hidden in CSS. -->
            <b:include cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='title'/>
          </b:includable>
                        <b:includable id='title'>
            <div>
              <b:class cond='data:this.imagePlacement == &quot;REPLACE&quot;' name='replaced'/>
              <b:include name='super.title'/>
            </div>
          </b:includable>
                      </b:widget>
                    </b:section>
                  </div>

                  <b:if cond='data:view.isLayoutMode or data:widgets any (w =&gt; w.sectionId == &quot;search_top&quot;)'>
                    <div class='search'>
                      <b:class cond='data:view.isSearch and data:view.search.query' name='focused'/>
                      <button class='search-expand touch-icon-button' expr:aria-label='data:messages.search.escaped'>
                        <div class='search-expand-text'><data:messages.search/></div>
                        <b:include data='{ iconClass: &quot;touch-icon search-expand-icon&quot; }' name='searchIcon'/>
                      </button>
                      <b:section id='search_top' name='Search (Top)' showaddelement='false'>
                        <b:widget id='BlogSearch1' locked='true' title='Search This Blog' type='BlogSearch' visible='true'>
                          <b:includable id='main'>
    <b:include name='widget-title'/>
    <b:include name='content'/>
  </b:includable>
                          <b:includable id='content'>
    <div class='widget-content' role='search'>
      <b:include name='searchForm'/>
    </div>
  </b:includable>
                          <b:includable id='searchForm'>
    <form expr:action='data:blog.searchUrl'>
      <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
      <b:include name='urlParamsAsFormInput'/>
      <div class='search-input'>
        <input autocomplete='off' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.searchThisBlog' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q'/>
      </div>
      <b:include name='searchSubmit'/>
    </form>
  </b:includable>
                          <b:includable id='searchSubmit'>
            <b:if cond='data:widget.sectionId == &quot;search_top&quot;'>
              <label class='search-submit-container'>
                <input type='submit'/>
                <b:include data='{ iconClass: &quot;touch-icon search-icon&quot; }' name='searchIcon'/>
              </label>
            <b:else/>
              <b:include name='super.searchSubmit'/>
            </b:if>
          </b:includable>
                        </b:widget>
                      </b:section>
                    </div>
                  </b:if>

                  <b:if cond='data:view.isLayoutMode or not data:view.isSingleItem'>
                    <nav class='top-nav' role='navigation'>
                      <b:section id='page_list_top' name='Page List (Top)' showaddelement='false'>
                        <b:widget id='PageList1' locked='true' title='Popular Posts from this Blog' type='PageList' visible='false'>
                          <b:widget-settings>
                            <b:widget-setting name='pageListJson'><![CDATA[{"link0":{"href":"http://auraayurvedic.blogspot.com/","position":0,"title":"Home"}}]]></b:widget-setting>
                            <b:widget-setting name='homeTitle'>Home</b:widget-setting>
                          </b:widget-settings>
                          <b:includable id='main'>
    <b:include name='widget-title'/>
    <b:include name='content'/>
  </b:includable>
                          <b:includable id='content'>
            <div class='widget-content'>
              <b:include cond='data:widget.sectionId == &quot;page_list_top&quot;' name='overflowablePageList'/>
              <b:include cond='data:widget.sectionId != &quot;page_list_top&quot;' name='pageList'/>
            </div>
          </b:includable>
                          <b:includable id='overflowButton'>
    <b:include name='verticalMoreIcon'/>
  </b:includable>
                          <b:includable id='overflowablePageList'>
    <div class='overflowable-container'>
      <div class='overflowable-contents'>
        <div class='container'>
          <b:with value='true' var='overflow'>
          <b:with value='&quot;tabs&quot;' var='pageListClass'>
            <b:include name='pageList'/>
          </b:with>
          </b:with>
        </div>
      </div>
      <div class='overflow-button hidden'>
        <b:include name='overflowButton'/>
      </div>
    </div>
  </b:includable>
                          <b:includable id='pageLink'>
    <li>
      <b:class cond='data:overflow' name='overflowable-item'/>
      <b:class cond='data:link.isCurrentPage' name='selected'/>

      <a expr:href='data:link.href'><data:link.title/></a>
    </li>
  </b:includable>
                          <b:includable id='pageList'>
    <ul>
      <b:class cond='data:pageListClass' expr:name='data:pageListClass'/>
      <b:loop values='data:links' var='link'>
        <b:include name='pageLink'/>
      </b:loop>
    </ul>
  </b:includable>
                        </b:widget>
                      </b:section>
                    </nav>
                  </b:if>
                </div>

              </header>
              <div class='centered-bottom'>
                <b:if cond='data:view.isArchive or (data:view.isSearch and data:view.search.resultsMessage)'>
                  <div class='post-filter-message'>
                    <div>
                      <b:if cond='data:view.isArchive'>
                        <data:view.archive.rangeMessage/>
                      <b:elseif cond='data:view.isSearch and data:view.search.resultsMessage'/>
                        <data:view.search.resultsMessageHtml/>
                      </b:if>
                    </div>
                    <div>
                      <a expr:href='data:blog.homepageUrl'><data:messages.viewAll/></a>
                    </div>
                  </div>
                </b:if>

                <main class='main-container' id='main' role='main' tabindex='-1'>
                  <b:if cond='data:view.isMultipleItems'>
                    <h2 class='main-heading'><data:messages.posts/></h2>
                  </b:if>

                  <b:section class='featured-post' id='featured_post' name='Featured Post' showaddelement='false'>
                    <b:widget cond='data:view.isHomepage' id='FeaturedPost1' locked='true' title='Featured Posts' type='FeaturedPost' visible='false'>
                      <b:widget-settings>
                        <b:widget-setting name='showSnippet'>false</b:widget-setting>
                        <b:widget-setting name='showPostTitle'>true</b:widget-setting>
                        <b:widget-setting name='postId'>0</b:widget-setting>
                        <b:widget-setting name='showFirstImage'>true</b:widget-setting>
                        <b:widget-setting name='useMostRecentPost'>true</b:widget-setting>
                      </b:widget-settings>
                      <b:includable id='main' var='this'>
    <b:include name='widget-title'/>
    <div class='widget-content'>
      <b:include name='snippetedPosts'/>
    </div>
  </b:includable>
                      <b:includable id='commentsLink'>
            <a class='comment-link' expr:href='data:post.commentsUrl ?: data:post.url' expr:onclick='data:post.commentsUrlOnclick'>
              <b:include name='commentIcon'/>
              <span class='num_comments'>
                <data:post.numberOfComments/>
              </span>
            </a>
          </b:includable>
                      <b:includable id='footerBylines'>
            <!-- Set the calling parent element to be a container. -->
            <b:class name='container'/>

            <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
              <b:include name='super.footerBylines'/>
            <b:else/>
              <b:include data='{ items: [[&quot;comments&quot;]] }' name='footerBylinesOverride'/>
            </b:if>
            <b:include data='{ shareButtonClass: &quot;post-share-buttons-bottom&quot;, overridden: true }' name='maybeAddShareButtons'/>
          </b:includable>
                      <b:includable id='headerByline'>
            <b:if cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;'>
              <b:include name='super.headerByline'/>
            <b:else/>
              <b:include data='{ items: [&quot;author&quot;, &quot;timestamp&quot;, &quot;labels&quot;] }' name='headerBylineOverride'/>
            </b:if>
            <b:include cond='data:view.isSingleItem and data:widget.type == &quot;Blog&quot;' data='{ shareButtonClass: &quot;post-share-buttons-top&quot;, overridden: true }' name='maybeAddShareButtons'/>
          </b:includable>
                      <b:includable id='postLabels'>
            <b:if cond='data:view.isMultipleItems'>
             <div class='labels-outer-container'>
                <div class='labels-container overflowable-container overflowable-no-popup'>
                  <div class='labels-items overflowable-contents byline post-labels'>
                    <b:loop index='i' values='data:post.labels' var='label'>
                      <span class='overflowable-item'>
                        <a expr:href='data:label.url' rel='tag'><data:label.name/></a>
                      </span>
                    </b:loop>
                  </div>
                  <span class='labels-more overflow-button hidden'>
                    <a expr:href='data:post.link ?: data:post.url'>+<span class='overflow-count'/></a>
                  </span>
                </div>
              </div>
            <b:else/>
              <b:include name='super.postLabels'/>
            </b:if>
          </b:includable>
                      <b:includable id='postShareButtons' var='post'>
            <!-- We call super.postShareButtons from the migrated positions. -->
          </b:includable>
                      <b:includable id='postTitle' var='post'>
            <!-- Snippetize the post title -->
            <div class='post-title-container'>
              <a expr:name='data:post.id'/>
              <h3 class='post-title entry-title'>
                <b:if cond='data:post.link or (data:post.url and data:view.url != data:post.url)'>
                  <a expr:href='data:post.link ?: data:post.url'>
                    <div class='snippet-container r-snippet-container'>
                      <div class='r-snippetized'>
                        <data:post.title/>
                      </div>
                      <b:if cond='data:post.title != &quot;&quot;'>
                        <div class='snippet-fade r-snippet-fade hidden'/>
                      </b:if>
                    </div>
                  </a>
                <b:else/>
                  <data:post.title/>
                </b:if>
              </h3>
            </div>
          </b:includable>
                      <b:includable id='postWrapperClasses'>
            <b:class cond='data:post.featuredImage' name='image'/>
            <b:class cond='not data:post.featuredImage' name='no-image'/>
            <b:class cond='data:post.labels and not data:post.labels.empty' name='has-labels'/>
          </b:includable>
                      <b:includable id='snippetedPostContent'>
            <b:if cond='data:widget.sectionId != &quot;featured_post&quot;'>
              <b:include name='super.snippetedPostContent'/>
            <b:else/>
              <b:with value='&quot;post-thumb-&quot; + data:post.id' var='thumbClassName'>
                <b:if cond='data:post.featuredImage'>
                  <style>
                    @media (min-width: 746px) { .hero .<data:thumbClassName/> {background-image:url(<b:eval expr='resizeImage(data:post.featuredImage, 800, &quot;800:272&quot;).cssEscaped'/>);} }
                    @media (min-width: 1545px) { .hero .<data:thumbClassName/> {background-image:url(<b:eval expr='resizeImage(data:post.featuredImage, 1185, &quot;1185:272&quot;).cssEscaped'/>);} }
                    @media (max-width: 400px) { .hero .<data:thumbClassName/> {background-image:url(<b:eval expr='resizeImage(data:post.featuredImage, 400, &quot;1:1&quot;).cssEscaped'/>); } }
                    @media (min-width: 401px) and (max-width: 745px) { .hero .<data:thumbClassName/> {background-image:url(<b:eval expr='resizeImage(data:post.featuredImage, 745, &quot;745:400&quot;).cssEscaped'/>); } }
                  </style>
                </b:if>

                <div expr:class='&quot;post-wrapper hero post-&quot; + data:post.id'>
                  <b:include name='postWrapperClasses'/>
                  <b:include name='feedPostImage'/>

                  <div class='slide'>
                    <div class='post hentry'>
                      <b:include cond='data:postDisplay.showTitle' data='post' name='postTitle'/>
                      <b:include name='headerByline'/>
                      <b:include cond='data:postDisplay.showSnippet' data='post' name='postSnippet'/>
                      <div class='post-footer'>
                        <b:include name='footerBylines'/>
                      </div>
                    </div>
                  </div>
                </div>
              </b:with>
            </b:if>
          </b:includable>
                      <b:includable id='snippetedPostThumbnail'>
            <div class='item-thumbnail'>
              <a expr:href='data:post.url'>
                <b:include data='{                                  image: data:post.featuredImage,                                  imageSizes: [280,560,840,1120,1400]                                }' name='responsiveImage'/>
              </a>
            </div>
          </b:includable>
                    </b:widget>
                  </b:section>

                  <b:section class='main' id='page_body' name='Page Body' showaddelement='false'>
                    <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' visible='true'>
                      <b:widget-settings>
                        <b:widget-setting name='showDateHeader'>false</b:widget-setting>
                        <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showShareButtons'>true</b:widget-setting>
                        <b:widget-setting name='showCommentLink'>true</b:widget-setting>
                        <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showAuthor'>false</b:widget-setting>
                        <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
                        <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='reactionsLabel'/>
                        <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
                        <b:widget-setting name='style.layout'>1x1</b:widget-setting>
                        <b:widget-setting name='showLabels'>true</b:widget-setting>
                        <b:widget-setting name='showLocation'>true</b:widget-setting>
                        <b:widget-setting name='postLabelsLabel'/>
                        <b:widget-setting name='showTimestamp'>true</b:widget-setting>
                        <b:widget-setting name='postsPerAd'>1</b:widget-setting>
                        <b:widget-setting name='showBacklinks'>false</b:widget-setting>
                        <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
                        <b:widget-setting name='showInlineAds'>false</b:widget-setting>
                        <b:widget-setting name='showReactions'>false</b:widget-setting>
                      </b:widget-settings>
                      <b:includable id='main'>
            <b:include name='noContentPlaceholder'/>
            <b:include name='super.main'/>
          </b:includable>
                      <b:includable id='aboutPostAuthor'>
    <div class='author-name'>
      <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
        <span>
          <data:post.author.name/>
        </span>
      </a>
    </div>
    <div>
      <span class='author-desc'>
        <data:post.author.aboutMe/>
      </span>
    </div>
  </b:includable>
                      <b:includable id='addComments'>
    <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
      <b:message name='messages.postAComment'/>
    </a>
  </b:includable>
                      <b:includable id='commentAuthorAvatar'>
    <div class='avatar-image-container'>
      <img class='author-avatar' expr:src='data:comment.authorAvatarSrc' height='35' width='35'/>
    </div>
  </b:includable>
                      <b:includable id='commentDeleteIcon' var='comment'>
    <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
      <b:if cond='data:showCmtPopup'>
        <div class='goog-toggle-button'>
          <div class='goog-inline-block comment-action-icon'/>
        </div>
      <b:else/>
        <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'>
          <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
        </a>
      </b:if>
    </span>
  </b:includable>
                      <b:includable id='commentForm' var='post'>
    <div class='comment-form'>
      <a name='comment-form'/>
      <h4 id='comment-post-message'><data:messages.postAComment/></h4>
      <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
        <p><data:this.messages.blogComment/></p>
      </b:if>
      <b:include data='post' name='commentFormIframeSrc'/>
      <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?: &quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
      <data:post.cmtfpIframe/>
      <script type='text/javascript'>
        BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    


        BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    


    <b:template-script inline='true' name='threaded_comments'/>
    <script type='text/javascript'>
      blogger.widgets.blog.initThreadedComments(
          <data:post.commentJso/>,
          <data:post.commentMsgs/>,
          <data:post.commentConfig/>);
  


      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: &#39;<b:eval expr='data:blog.locale.language ?: &quot;auto&quot;'/>&#39;,
          autoDisplay: &#39;true&#39;,
          layout: google.translate.TranslateElement.InlineLayout.<data:layout/>
        }, &#39;google_translate_element&#39;);
      }
  


  </b:includable>
                      </b:widget>
                      <b:widget id='Profile1' locked='false' title='About Me' type='Profile' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='showaboutme'>true</b:widget-setting>
                          <b:widget-setting name='showlocation'>false</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main'>
            <b:include name='content'/>
          </b:includable>
                        <b:includable id='authorProfileImage'>
    <img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:src='data:authorPhoto.image' expr:width='data:authorPhoto.width'/>
  </b:includable>
                        <b:includable id='content'>
    <b:if cond='data:team'>
      <div class='widget-content team'>
        <b:include name='teamProfile'/>
      </div>
    <b:else/>
      <div class='widget-content individual'>
        <b:include name='userProfile'/>
      </div>
    </b:if>
  </b:includable>
                        <b:includable id='defaultProfileImage'>
            <div class='default-avatar-wrapper'>
              <b:include data='{ iconClass: &quot;avatar-icon&quot; }' name='defaultAvatarIcon'/>
            </div>
          </b:includable>
                        <b:includable id='profileImage'>
    <b:if cond='data:authorPhoto.image'>
      <b:include name='authorProfileImage'/>
    <b:else/>
      <b:include name='defaultProfileImage'/>
    </b:if>
  </b:includable>
                        <b:includable id='teamProfile'>
            <div class='extendable'>
              <b:include data='{                                 items: data:authors,                                 itemSet: &quot;authors&quot;,                                 itemsMarkup: &quot;super.teamProfile&quot;,                                 limit: 4                               }' name='extendableItems'/>
            </div>
          </b:includable>
                        <b:includable id='teamProfileLink'>
            <!-- Add an extra 'Visit profile' link -->
            <a class='profile-link g-profile' expr:href='data:author.userUrl'>
              <b:include name='profileImage'/>
              <div class='profile-name-container'>
                <span class='profile-name'><data:author.display-name/></span>
                <data:messages.visitProfile/>
              </div>
            </a>
          </b:includable>
                        <b:includable id='userLocation'>
    <dd class='profile-data location'><data:location/></dd>
  </b:includable>
                        <b:includable id='userProfile'>
    <b:include name='userProfileImage'/>
    <b:include name='userProfileInfo'/>
  </b:includable>
                        <b:includable id='userProfileData'>
    <dt class='profile-data'>
      <a class='profile-link g-profile' expr:href='data:userUrl' rel='author nofollow'>
        <data:displayname/>
      </a>
    </dt>
  </b:includable>
                        <b:includable id='userProfileImage'>
    <a expr:href='data:userUrl' rel='nofollow'>
      <b:include name='profileImage'/>
    </a>
  </b:includable>
                        <b:includable id='userProfileInfo'>
    <div class='profile-info'>
      <dl class='profile-datablock'>
        <b:class cond='data:showlocation and data:location != &quot;&quot;' name='has-location'/>

        <b:include name='userProfileData'/>
        <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
        <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
      </dl>
      <b:include name='viewProfileLink'/>
    </div>
  </b:includable>
                        <b:includable id='userProfileText'>
    <dd class='profile-textblock'>
      <data:aboutme/>
    </dd>
  </b:includable>
                        <b:includable id='viewProfileLink'>
            <!-- Change single profile link message to 'Visit profile' -->
            <a class='profile-link' expr:href='data:userUrl' rel='author'><data:messages.visitProfile/></a>
          </b:includable>
                      </b:widget>
                      <b:widget id='BlogArchive1' locked='false' title='' type='BlogArchive' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='showStyle'>MENU</b:widget-setting>
                          <b:widget-setting name='yearPattern'>yyyy</b:widget-setting>
                          <b:widget-setting name='showWeekEnd'>true</b:widget-setting>
                          <b:widget-setting name='monthPattern'>MMMM yyyy</b:widget-setting>
                          <b:widget-setting name='dayPattern'>MMM dd</b:widget-setting>
                          <b:widget-setting name='weekPattern'>MM/dd</b:widget-setting>
                          <b:widget-setting name='chronological'>false</b:widget-setting>
                          <b:widget-setting name='showPosts'>false</b:widget-setting>
                          <b:widget-setting name='frequency'>MONTHLY</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main' var='this'>
            <details class='collapsible extendable'>
              <b:attr cond='data:view.isArchive' name='open' value='open'/>
              <b:with value='true' var='renderAsDetails'>
              <b:with value='data:messages.archive' var='defaultTitle'>
                <b:include name='super.main'/>
              </b:with>
              </b:with>
            </details>
          </b:includable>
                        <b:includable id='content'>
    <div class='widget-content'>
      <div id='ArchiveList'>
        <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
          <b:include cond='data:this.style == &quot;HIERARCHY&quot;' name='hierarchy'/>
          <b:include cond='data:this.style in {&quot;FLAT&quot;, &quot;MENU&quot;}' name='flat'/>
        </div>
      </div>
    </div>
  </b:includable>
                        <b:includable id='flat'>
            <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.flat&quot;                             }' name='extendableItems'/>
          </b:includable>
                        <b:includable id='hierarchy'>
            <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               limit: 1,                               items: data:this.data,                               itemSet: &quot;data&quot;,                               itemsMarkup: &quot;super.hierarchy&quot;                             }' name='extendableItems'/>
          </b:includable>
                        <b:includable id='interval' var='intervals'>
    <ul class='hierarchy'>
      <b:loop values='data:intervals' var='interval'>
        <li class='archivedate'>
          <div class='hierarchy-title'>
            <a class='post-count-link' expr:href='data:interval.url'>
              <data:interval.name/>
              <span class='post-count'><data:interval.post-count/></span>
            </a>
          </div>
          <div class='hierarchy-content'>
            <b:include cond='data:interval.data' data='interval.data' name='interval'/>
            <b:include cond='data:interval.posts' data='interval.posts' name='posts'/>
          </div>
        </li>
      </b:loop>
    </ul>
  </b:includable>
                        <b:includable id='posts' var='posts'>
    <ul class='posts hierarchy'>
      <b:loop values='data:posts' var='post'>
        <li>
          <a expr:href='data:post.url'><data:post.title/></a>
        </li>
      </b:loop>
    </ul>
  </b:includable>
                      </b:widget>
                      <b:widget id='Label1' locked='false' title='Labels' type='Label' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
                          <b:widget-setting name='display'>LIST</b:widget-setting>
                          <b:widget-setting name='selectedLabelsList'/>
                          <b:widget-setting name='showType'>ALL</b:widget-setting>
                          <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main' var='this'>
            <details class='collapsible extendable'>
              <b:attr cond='data:view.isLabelSearch' name='open' value='open'/>
              <b:with value='true' var='renderAsDetails'>
              <b:with value='data:messages.labels' var='defaultTitle'>
                <b:include name='super.main'/>
              </b:with>
              </b:with>
            </details>
          </b:includable>
                        <b:includable id='cloud'>
            <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.labels,                               itemSet: &quot;labels&quot;,                               itemsMarkup: &quot;super.cloud&quot;                             }' name='extendableItems'/>
          </b:includable>
                        <b:includable id='content'>
    <div class='widget-content'>
      <b:class expr:name='data:this.display + &quot;-label-widget-content&quot;'/>
      <b:include cond='data:this.display == &quot;list&quot;' name='list'/>
      <b:include cond='data:this.display == &quot;cloud&quot;' name='cloud'/>
    </div>
  </b:includable>
                        <b:includable id='list'>
            <b:include data='{                               buttonClass: &quot;flat-button&quot;,                               items: data:this.labels,                               itemSet: &quot;labels&quot;,                               itemsMarkup: &quot;super.list&quot;                             }' name='extendableItems'/>
          </b:includable>
                      </b:widget>
                      <b:widget id='PopularPosts2' locked='false' title='Popular Posts' type='PopularPosts' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='numItemsToShow'>3</b:widget-setting>
                          <b:widget-setting name='showThumbnails'>true</b:widget-setting>
                          <b:widget-setting name='showSnippets'>true</b:widget-setting>
                          <b:widget-setting name='timeRange'>LAST_YEAR</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main'>
            <b:comment>Default the title to &#39;Popular posts from this blog&#39;.</b:comment>
            <b:with value='data:messages.popularPosts' var='defaultTitle'>
              <b:include name='super.main'/>
            </b:with>
          </b:includable>
                        <b:includable id='commentsLink'>
            <a class='comment-link' expr:href='data:post.commentsUrl ?: data:post.url' expr:onclick='data:post.commentsUrlOnclick'>
              <b:include name='commentIcon'/>
              <span class='num_comments'>
                <data:post.numberOfComments/>
              </span>
            </a>
          </b:includable>
                        <b:includable id='itemBody' var='post'>
            <div class='item-content'>
              <b:with value='&quot;popular-posts&quot;' var='snippetPrefix'>
                <b:include cond='data:postDisplay.showSnippet' data='post' name='postSnippet'/>
              </b:with>
            </div>
          </b:includable>
                        <b:includable id='snippetedPostContent'>
            <b:comment>Move the thumbnail outside of the body and above the title</b:comment>
            <b:include cond='data:postDisplay.showFeaturedImage and data:post.featuredImage.isResizable' data='post' name='snippetedPostThumbnail'/>
            <b:include data='post' name='snippetedPostTitle'/>
            <b:include data='post' name='itemBody'/>
          </b:includable>
                        <b:includable id='snippetedPostThumbnail'>
            <div class='item-thumbnail'>
              <a expr:href='data:post.url'>
                <b:include data='{                                  image: data:post.featuredImage,                                  imageSizes: [280,560,840,1120,1400]                                }' name='responsiveImage'/>
              </a>
            </div>
          </b:includable>
                      </b:widget>
                      <b:widget id='ReportAbuse1' locked='true' title='' type='ReportAbuse' visible='false'>
                        <b:includable id='main'>
    <b:include name='reportAbuse'/>
  </b:includable>
                      </b:widget>
                    </b:section>
                  </b:if>
                  <b:if cond='data:view.isSingleItem or data:view.isLayoutMode'>
                    <b:section id='sidebar_item' name='Sidebar (Item Page)'>
                      <b:widget id='Translate2' locked='false' title='Translate' type='Translate' visible='true'>
                        <b:widget-settings>
                          <b:widget-setting name='displayMode'>VERTICAL</b:widget-setting>
                        </b:widget-settings>
                        <b:includable id='main'>
    <b:include name='widget-title'/>
    <b:include name='content'/>
  </b:includable>
                        <b:includable id='content'>
    <div id='google_translate_element'/>
    <script>
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
          pageLanguage: &#39;<b:eval expr='data:blog.locale.language ?: &quot;auto&quot;'/>&#39;,
          autoDisplay: &#39;true&#39;,
          layout: google.translate.TranslateElement.InlineLayout.<data:layout/>
        }, &#39;google_translate_element&#39;);
      }
  