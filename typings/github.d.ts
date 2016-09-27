declare module 'github' {
	class Api {
		constructor(options: {
			debug?: boolean;
			host: string;
			Promise: any;
			protocol: string;
			followRedirects?: boolean;
		});

		authenticate(options): void;

		activity: {
			// GET /notifications/threads/:id/subscription
			checkNotificationThreadSubscription(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/starred/:user/:repo
			checkStarringRepo(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /notifications/threads/:id/subscription
			deleteNotificationThreadSubscription(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /events
			getEvents(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/events
			getEventsForOrg(options: {
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/events
			getEventsForRepo(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/events
			getEventsForRepoIssues(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /networks/:user/:repo/events
			getEventsForRepoNetwork(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/events
			getEventsForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/events/orgs/:org
			getEventsForUserOrg(options: {
				user?: string;
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/events/public
			getEventsForUserPublic(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/received_events
			getEventsReceived(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/received_events/public
			getEventsReceivedPublic(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /feeds
			getFeeds(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /notifications/threads/:id
			getNotificationThread(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /notifications
			getNotifications(options: {
				all?: Boolean;
				participating?: Boolean;
				since?: Date;
				before?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/notifications
			getNotificationsForUser(options: {
				user?: string;
				repo?: string;
				all?: Boolean;
				participating?: Boolean;
				since?: Date;
				before?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/subscription
			getRepoSubscription(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stargazers
			getStargazersForRepo(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/starred
			getStarredRepos(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/starred
			getStarredReposForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/subscriptions
			getWatchedRepos(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/subscriptions
			getWatchedReposForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/subscribers
			getWatchersForRepo(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /notifications/threads/:id
			markNotificationThreadAsRead(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /notifications
			markNotificationsAsRead(options: {
				last_read_at?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/notifications
			markNotificationsAsReadForRepo(options: {
				last_read_at?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /notifications/threads/:id/subscription
			setNotificationThreadSubscription(options: {
				id?: string;
				subscribed?: Boolean;
				ignored?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/subscription
			setRepoSubscription(options: {
				user?: string;
				repo?: string;
				subscribed?: Boolean;
				ignored?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /user/starred/:user/:repo
			starRepo(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/starred/:user/:repo
			unstarRepo(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/subscription
			unwatchRepo(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		authorization: {
			// GET /applications/:client_id/tokens/:access_token
			check(options: {
				client_id?: string;
				access_token?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /authorizations
			create(options: {
				scopes?: Array<string>;
				note?: string;
				note_url?: string;
				client_id?: string;
				client_secret?: string;
				fingerprint?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /authorizations/:id
			delete(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /applications/grants/:id
			deleteGrant(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /authorizations/:id
			get(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /authorizations
			getAll(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /applications/grants/:id
			getGrant(options: {
				id?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /applications/grants
			getGrants(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /authorizations/clients/:client_id
			getOrCreateAuthorizationForApp(options: {
				client_id?: string;
				client_secret?: string;
				scopes?: Array<string>;
				note?: string;
				note_url?: string;
				fingerprint?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /authorizations/clients/:client_id/:fingerprint
			getOrCreateAuthorizationForAppAndFingerprint(options: {
				client_id?: string;
				fingerprint?: string;
				client_secret?: string;
				scopes?: Array<string>;
				note?: string;
				note_url?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /applications/:client_id/tokens/:access_token
			reset(options: {
				client_id?: string;
				access_token?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /applications/:client_id/tokens/:access_token
			revoke(options: {
				client_id?: string;
				access_token?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /authorizations/:id
			update(options: {
				id?: string;
				scopes?: Array<string>;
				add_scopes?: Array<string>;
				remove_scopes?: Array<string>;
				note?: string;
				note_url?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		enterprise: {
			// POST /admin/organizations
			createOrg(options: {
				login?: string;
				admin?: string;
				profile_name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /enterprise/settings/license
			getLicense(options: {}, callback?: (err, res) => void): Promise<any>;

			// POST /staff/indexing_jobs
			queueIndexingJob(options: {
				target?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /enterprise/stats/:type
			stats(options: {
				type?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /admin/ldap/teams/:team_id/sync
			syncLdapForTeam(options: {
				team_id?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /admin/ldap/users/:user/sync
			syncLdapForUser(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /admin/ldap/teams/:team_id/mapping
			updateLdapForTeam(options: {
				team_id?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /admin/ldap/users/:user/mapping
			updateLdapForUser(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		gists: {
			// GET /gists/:id/star
			checkStar(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /gists
			create(options: {
				files?: Object;
				description?: string;
				public?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /gists/:gist_id/comments
			createComment(options: {
				gist_id?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /gists/:id
			delete(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /gists/:gist_id/comments/:id
			deleteComment(options: {
				gist_id?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /gists/:id
			edit(options: {
				id?: string;
				description?: string;
				files?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /gists/:gist_id/comments/:id
			editComment(options: {
				gist_id?: string;
				id?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /gists/:id/forks
			fork(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:id
			get(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists
			getAll(options: {
				page?: Number;
				per_page?: Number;
				since?: Date
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:gist_id/comments/:id
			getComment(options: {
				gist_id?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:gist_id/comments
			getComments(options: {
				gist_id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:id/commits
			getCommits(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/gists
			getForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number;
				since?: Date
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:id/forks
			getForks(options: {
				id?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/public
			getPublic(options: {
				since?: Date
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/:id/:sha
			getRevision(options: {
				id?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gists/starred
			getStarred(options: {
				since?: Date
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /gists/:id/star
			star(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /gists/:id/star
			unstar(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		gitdata: {
			// POST /repos/:user/:repo/git/blobs
			createBlob(options: {
				user?: string;
				repo?: string;
				content?: string;
				encoding?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/git/commits
			createCommit(options: {
				user?: string;
				repo?: string;
				message?: string;
				tree?: string;
				parents?: Array<string>;
				author?: Object;
				committer?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/git/refs
			createReference(options: {
				user?: string;
				repo?: string;
				ref?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/git/tags
			createTag(options: {
				user?: string;
				repo?: string;
				tag?: string;
				message?: string;
				object?: string;
				type?: string;
				tagger?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/git/trees
			createTree(options: {
				user?: string;
				repo?: string;
				tree?: Object;
				base_tree?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/git/refs/:ref
			deleteReference(options: {
				user?: string;
				repo?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/blobs/:sha
			getBlob(options: {
				user?: string;
				repo?: string;
				sha?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/commits/:sha
			getCommit(options: {
				user?: string;
				repo?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/commits/:sha
			getCommitSignatureVerification(options: {
				user?: string;
				repo?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/refs/:ref
			getReference(options: {
				user?: string;
				repo?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/refs
			getReferences(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/tags/:sha
			getTag(options: {
				user?: string;
				repo?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/tags/:sha
			getTagSignatureVerification(options: {
				user?: string;
				repo?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/refs/tags
			getTags(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/git/trees/:sha
			getTree(options: {
				user?: string;
				repo?: string;
				sha?: string;
				recursive?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/git/refs/:ref
			updateReference(options: {
				user?: string;
				repo?: string;
				ref?: string;
				sha?: string;
				force?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

		}

		installations: {
			// POST /installations/:installation_id/access_tokens
			create(options: {
				installation_id?: Number;
				user_id?: Number
			}, callback?: (err, res) => void): Promise<any>;

		}

		issues: {
			// POST /repos/:user/:repo/issues/:number/assignees
			addAssigneesToIssue(options: {
				user?: string;
				repo?: string;
				number?: Number;
				assignees?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/issues/:number/labels
			addLabels(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/assignees/:assignee
			checkAssignee(options: {
				user?: string;
				repo?: string;
				assignee?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/issues
			create(options: {
				user?: string;
				repo?: string;
				title?: string;
				body?: string;
				assignee?: string;
				milestone?: Number;
				labels?: Object;
				assignees?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/issues/:number/comments
			createComment(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/labels
			createLabel(options: {
				user?: string;
				repo?: string;
				name?: string;
				color?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/milestones
			createMilestone(options: {
				user?: string;
				repo?: string;
				title?: string;
				state?: string;
				description?: string;
				due_on?: Date
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/issues/comments/:id
			deleteComment(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/labels/:name
			deleteLabel(options: {
				user?: string;
				repo?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/milestones/:number
			deleteMilestone(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/issues/:number
			edit(options: {
				user?: string;
				repo?: string;
				number?: Number;
				title?: string;
				body?: string;
				assignee?: string;
				state?: string;
				milestone?: Number;
				labels?: Object;
				assignees?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/issues/comments/:id
			editComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number
			get(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /issues
			getAll(options: {
				filter?: string;
				state?: string;
				labels?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/assignees
			getAssignees(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/comments/:id
			getComment(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number/comments
			getComments(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/comments
			getCommentsForRepo(options: {
				user?: string;
				repo?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/events/:id
			getEvent(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number/events
			getEvents(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/events
			getEventsForRepo(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number/timeline
			getEventsTimeline(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/issues
			getForOrg(options: {
				org?: string;
				filter?: string;
				state?: string;
				labels?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues
			getForRepo(options: {
				user?: string;
				repo?: string;
				milestone?: string;
				state?: string;
				assignee?: string;
				creator?: string;
				mentioned?: string;
				labels?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/issues
			getForUser(options: {
				filter?: string;
				state?: string;
				labels?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number/labels
			getIssueLabels(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/labels/:name
			getLabel(options: {
				user?: string;
				repo?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/labels
			getLabels(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/milestones/:number
			getMilestone(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/milestones/:number/labels
			getMilestoneLabels(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/milestones
			getMilestones(options: {
				user?: string;
				repo?: string;
				state?: string;
				sort?: string;
				direction?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/issues/:number/lock
			lock(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/issues/:number/labels
			removeAllLabels(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/issues/:number/assignees
			removeAssigneesFromIssue(options: {
				user?: string;
				repo?: string;
				number?: Number;
				assignees?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/issues/:number/labels/:name
			removeLabel(options: {
				user?: string;
				repo?: string;
				number?: Number;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/issues/:number/labels
			replaceAllLabels(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/issues/:number/lock
			unlock(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/labels/:oldname
			updateLabel(options: {
				user?: string;
				repo?: string;
				oldname?: string;
				name?: string;
				color?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/milestones/:number
			updateMilestone(options: {
				user?: string;
				repo?: string;
				number?: Number;
				title?: string;
				state?: string;
				description?: string;
				due_on?: Date
			}, callback?: (err, res) => void): Promise<any>;

		}

		migrations: {
			// DELETE /repos/:user/:repo/import
			cancelImport(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/migrations/:id/archive
			deleteMigrationArchive(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/import/authors
			getImportCommitAuthors(options: {
				user?: string;
				repo?: string;
				since?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/import
			getImportProgress(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /:user/:name/import/large_files
			getLargeImportFiles(options: {
				user?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/migrations/:id/archive
			getMigrationArchiveLink(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/migrations/:id
			getMigrationStatus(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/migrations
			getMigrations(options: {
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/import/authors/:author_id
			mapImportCommitAuthor(options: {
				user?: string;
				repo?: string;
				author_id?: string;
				email?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /:user/:name/import/lfs
			setImportLfsPreference(options: {
				user?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/import
			startImport(options: {
				user?: string;
				repo?: string;
				vcs_url?: string;
				vcs?: string;
				vcs_username?: string;
				vcs_password?: string;
				tfvc_project?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /orgs/:org/migrations
			startMigration(options: {
				org?: string;
				repositories?: Array<string>;
				lock_repositories?: Boolean;
				exclude_attachments?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/migrations/:id/repos/:repo/lock
			unlockRepoLockedForMigration(options: {
				org?: string;
				id?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/import
			updateImport(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		misc: {
			// GET /emojis
			getEmojis(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /gitignore/templates/:name
			getGitignoreTemplate(options: {
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /gitignore/templates
			getGitignoreTemplates(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /licenses/:license
			getLicense(options: {
				license?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /licenses
			getLicenses(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /meta
			getMeta(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /rate_limit
			getRateLimit(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/license
			getRepoLicense(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /markdown
			renderMarkdown(options: {
				text?: string;
				mode?: string;
				context?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /markdown/raw
			renderMarkdownRaw(options: {
				data?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		orgs: {
			// PUT /orgs/:org/memberships/:user
			addOrganizationMembership(options: {
				org?: string;
				user?: string;
				role?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /teams/:id/memberships/:user
			addTeamMembership(options: {
				id?: string;
				user?: string;
				role?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /teams/:id/repos/:org/:repo
			addTeamRepo(options: {
				id?: string;
				org?: string;
				repo?: string;
				permission?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/members/:user
			checkMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/public_members/:user
			checkPublicMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /teams/:id/repos/:user/:repo
			checkTeamRepo(options: {
				id?: string;
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/public_members/:user
			concealMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /orgs/:org/hooks
			createHook(options: {
				org?: string;
				name?: string;
				config?: Object;
				events?: Array<string>;
				active?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /orgs/:org/teams
			createTeam(options: {
				org?: string;
				name?: string;
				description?: string;
				repo_names?: Array<string>;
				privacy?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/hooks/:id
			deleteHook(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /teams/:id
			deleteTeam(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /teams/:id/repos/:user/:repo
			deleteTeamRepo(options: {
				id?: string;
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /orgs/:org/hooks/:id
			editHook(options: {
				org?: string;
				id?: string;
				config?: Object;
				events?: Array<string>;
				active?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /teams/:id
			editTeam(options: {
				id?: string;
				name?: string;
				description?: string;
				privacy?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org
			get(options: {
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /organizations
			getAll(options: {
				since?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/orgs
			getForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/hooks/:id
			getHook(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/hooks
			getHooks(options: {
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/members
			getMembers(options: {
				org?: string;
				filter?: string;
				role?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/memberships/:user
			getOrganizationMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/memberships/orgs
			getOrganizationMemberships(options: {
				state?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/public_members
			getPublicMembers(options: {
				org?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /teams/:id
			getTeam(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /teams/:id/members
			getTeamMembers(options: {
				id?: string;
				role?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /teams/:id/memberships/:user
			getTeamMembership(options: {
				id?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /teams/:id/repos
			getTeamRepos(options: {
				id?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/teams
			getTeams(options: {
				org?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /orgs/:org/hooks/:id/pings
			pingHook(options: {
				org?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /orgs/:org/public_members/:user
			publicizeMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/members/:user
			removeMember(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /orgs/:org/memberships/:user
			removeOrganizationMembership(options: {
				org?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /teams/:id/memberships/:user
			removeTeamMembership(options: {
				id?: string;
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /orgs/:org
			update(options: {
				org?: string;
				billing_email?: string;
				company?: string;
				email?: string;
				location?: string;
				name?: string;
				description?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		pullRequests: {
			// GET /repos/:user/:repo/pulls/:number/merge
			checkMerged(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pulls
			create(options: {
				user?: string;
				repo?: string;
				title?: string;
				head?: string;
				base?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pulls/:number/comments
			createComment(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: string;
				commit_id?: string;
				path?: string;
				position?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pulls/:number/comments
			createCommentReply(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: string;
				in_reply_to?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pulls
			createFromIssue(options: {
				user?: string;
				repo?: string;
				issue?: Number;
				head?: string;
				base?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/pulls/comments/:number
			deleteComment(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/pulls/comments/:number
			editComment(options: {
				user?: string;
				repo?: string;
				number?: Number;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/:number
			get(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls
			getAll(options: {
				user?: string;
				repo?: string;
				state?: string;
				head?: string;
				base?: string;
				sort?: string;
				direction?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/comments/:number
			getComment(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/:number/comments
			getComments(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/comments
			getCommentsForRepo(options: {
				user?: string;
				repo?: string;
				sort?: string;
				direction?: string;
				since?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/:number/commits
			getCommits(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/:number/files
			getFiles(options: {
				user?: string;
				repo?: string;
				number?: Number;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/pulls/:number/merge
			merge(options: {
				user?: string;
				repo?: string;
				number?: Number;
				commit_title?: string;
				commit_message?: string;
				sha?: string;
				merge_method?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/pulls/:number
			update(options: {
				user?: string;
				repo?: string;
				number?: Number;
				title?: string;
				body?: string;
				state?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		reactions: {
			// POST /repos/:user/:repo/comments/:id/reactions
			createForCommitComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/issues/:number/reactions
			createForIssue(options: {
				user?: string;
				repo?: string;
				number?: Number;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/issues/comments/:id/reactions
			createForIssueComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pulls/comments/:id/reactions
			createForPullRequestReviewComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /reactions/:id
			delete(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/comments/:id/reactions
			getForCommitComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/:number/reactions
			getForIssue(options: {
				user?: string;
				repo?: string;
				number?: Number;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/issues/comments/:id/reactions
			getForIssueComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pulls/comments/:id/reactions
			getForPullRequestReviewComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				content?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		repos: {
			// PUT /repos/:user/:repo/collaborators/:collabuser
			addCollaborator(options: {
				user?: string;
				repo?: string;
				collabuser?: string;
				permission?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts
			addProtectedBranchRequiredStatusChecksContexts(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/branches/:branch/protection/restrictions/teams
			addProtectedBranchTeamRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/branches/:branch/protection/restrictions/users
			addProtectedBranchUserRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/collaborators/:collabuser
			checkCollaborator(options: {
				user?: string;
				repo?: string;
				collabuser?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/compare/:base...:head
			compareCommits(options: {
				user?: string;
				repo?: string;
				base?: string;
				head?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /user/repos
			create(options: {
				name?: string;
				description?: string;
				homepage?: string;
				private?: Boolean;
				has_issues?: Boolean;
				has_wiki?: Boolean;
				has_downloads?: Boolean;
				auto_init?: Boolean;
				gitignore_template?: string;
				license_template?: string;
				allow_squash_merge?: Boolean;
				allow_merge_commit?: Boolean;
				allow_rebase_merge?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/commits/:sha/comments
			createCommitComment(options: {
				user?: string;
				repo?: string;
				sha?: string;
				body?: string;
				path?: string;
				position?: Number;
				line?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/deployments
			createDeployment(options: {
				user?: string;
				repo?: string;
				ref?: string;
				task?: string;
				auto_merge?: Boolean;
				required_contexts?: Array<string>;
				payload?: string;
				environment?: string;
				description?: string;
				transient_environment?: Boolean;
				production_environment?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/deployments/:id/statuses
			createDeploymentStatus(options: {
				user?: string;
				repo?: string;
				id?: string;
				state?: string;
				target_url?: string;
				log_url?: string;
				description?: string;
				environment_url?: string;
				auto_inactive?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/contents/:path
			createFile(options: {
				user?: string;
				repo?: string;
				path?: string;
				message?: string;
				content?: string;
				branch?: string;
				committer?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// POST /orgs/:org/repos
			createForOrg(options: {
				org?: string;
				name?: string;
				description?: string;
				homepage?: string;
				private?: Boolean;
				has_issues?: Boolean;
				has_wiki?: Boolean;
				has_downloads?: Boolean;
				team_id?: Number;
				auto_init?: Boolean;
				gitignore_template?: string;
				license_template?: string;
				allow_squash_merge?: Boolean;
				allow_merge_commit?: Boolean;
				allow_rebase_merge?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/hooks
			createHook(options: {
				user?: string;
				repo?: string;
				name?: string;
				config?: Object;
				events?: Array<string>;
				active?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/keys
			createKey(options: {
				user?: string;
				repo?: string;
				title?: string;
				key?: string;
				read_only?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/projects
			createProject(options: {
				user?: string;
				repo?: string;
				name?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/projects/columns/:id/cards
			createProjectCard(options: {
				user?: string;
				repo?: string;
				id?: string;
				note?: string;
				content_id?: string;
				content_type?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/projects/:number/columns
			createProjectColumn(options: {
				user?: string;
				repo?: string;
				number?: Number;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/releases
			createRelease(options: {
				user?: string;
				repo?: string;
				tag_name?: string;
				target_commitish?: string;
				name?: string;
				body?: string;
				draft?: Boolean;
				prerelease?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/statuses/:sha
			createStatus(options: {
				user?: string;
				repo?: string;
				sha?: string;
				state?: string;
				target_url?: string;
				description?: string;
				context?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo
			delete(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/releases/assets/:id
			deleteAsset(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/comments/:id
			deleteCommitComment(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/downloads/:id
			deleteDownload(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/contents/:path
			deleteFile(options: {
				user?: string;
				repo?: string;
				path?: string;
				message?: string;
				sha?: string;
				branch?: string;
				committer?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/hooks/:id
			deleteHook(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repositories/:repo/invitations/:id
			deleteInvite(options: {
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/keys/:id
			deleteKey(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/projects/:number
			deleteProject(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/projects/columns/cards/:id
			deleteProjectCard(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/projects/columns/:id
			deleteProjectColumn(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/releases/:id
			deleteRelease(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo
			edit(options: {
				user?: string;
				repo?: string;
				name?: string;
				description?: string;
				homepage?: string;
				private?: Boolean;
				has_issues?: Boolean;
				has_wiki?: Boolean;
				has_downloads?: Boolean;
				default_branch?: string;
				allow_squash_merge?: Boolean;
				allow_merge_commit?: Boolean;
				allow_rebase_merge?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/releases/assets/:id
			editAsset(options: {
				user?: string;
				repo?: string;
				id?: string;
				name?: string;
				label?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/hooks/:id
			editHook(options: {
				user?: string;
				repo?: string;
				id?: string;
				name?: string;
				config?: Object;
				events?: Array<string>;
				add_events?: Array<string>;
				remove_events?: Array<string>;
				active?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/releases/:id
			editRelease(options: {
				user?: string;
				repo?: string;
				id?: string;
				tag_name?: string;
				target_commitish?: string;
				name?: string;
				body?: string;
				draft?: Boolean;
				prerelease?: Boolean
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/forks
			fork(options: {
				user?: string;
				repo?: string;
				organization?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo
			get(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/repos
			getAll(options: {
				visibility?: string;
				affiliation?: string;
				type?: string;
				sort?: string;
				direction?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/comments
			getAllCommitComments(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/:archive_format/:ref
			getArchiveLink(options: {
				user?: string;
				repo?: string;
				archive_format?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases/assets/:id
			getAsset(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch
			getBranch(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection
			getBranchProtection(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches
			getBranches(options: {
				user?: string;
				repo?: string;
				protected?: Boolean;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repositories/:id
			getById(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/traffic/clones
			getClones(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/collaborators
			getCollaborators(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits/:sha/status
			getCombinedStatus(options: {
				user?: string;
				repo?: string;
				sha?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits/:sha
			getCommit(options: {
				user?: string;
				repo?: string;
				sha?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/comments/:id
			getCommitComment(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits/:sha/comments
			getCommitComments(options: {
				user?: string;
				repo?: string;
				sha?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits
			getCommits(options: {
				user?: string;
				repo?: string;
				sha?: string;
				path?: string;
				author?: string;
				since?: Date;
				until?: Date;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/contents/:path
			getContent(options: {
				user?: string;
				repo?: string;
				path?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/contributors
			getContributors(options: {
				user?: string;
				repo?: string;
				anon?: Boolean;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/deployments/:id/statuses
			getDeploymentStatuses(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/deployments
			getDeployments(options: {
				user?: string;
				repo?: string;
				sha?: string;
				ref?: string;
				task?: string;
				environment?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/downloads/:id
			getDownload(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/downloads
			getDownloads(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /orgs/:org/repos
			getForOrg(options: {
				org?: string;
				type?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/repos
			getForUser(options: {
				user?: string;
				type?: string;
				sort?: string;
				direction?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/forks
			getForks(options: {
				user?: string;
				repo?: string;
				sort?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/hooks/:id
			getHook(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/hooks
			getHooks(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repositories/:repo/invitations
			getInvites(options: {
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/keys/:id
			getKey(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/keys
			getKeys(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/languages
			getLanguages(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pages/builds/latest
			getLatestPagesBuild(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases/latest
			getLatestRelease(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pages
			getPages(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pages/builds/:id
			getPagesBuild(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/pages/builds
			getPagesBuilds(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/traffic/popular/paths
			getPaths(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects/:number
			getProject(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects/columns/cards/:id
			getProjectCard(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects/columns/:id/cards
			getProjectCards(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects/columns/:id
			getProjectColumn(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects/:number/columns
			getProjectColumns(options: {
				user?: string;
				repo?: string;
				number?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/projects
			getProjects(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection/required_status_checks
			getProtectedBranchRequiredStatusChecks(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts
			getProtectedBranchRequiredStatusChecksContexts(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection/restrictions
			getProtectedBranchRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection/restrictions/teams
			getProtectedBranchTeamRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/branches/:branch/protection/restrictions/users
			getProtectedBranchUserRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repositories
			getPublic(options: {
				since?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/readme
			getReadme(options: {
				user?: string;
				repo?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/traffic/popular/referrers
			getReferrers(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases/:id
			getRelease(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases/tags/:tag
			getReleaseByTag(options: {
				user?: string;
				repo?: string;
				tag?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases
			getReleases(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits/:ref
			getShaOfCommitRef(options: {
				user?: string;
				repo?: string;
				ref?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stats/code_frequency
			getStatsCodeFrequency(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stats/commit_activity
			getStatsCommitActivity(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stats/contributors
			getStatsContributors(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stats/participation
			getStatsParticipation(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/stats/punch_card
			getStatsPunchCard(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/commits/:sha/statuses
			getStatuses(options: {
				user?: string;
				repo?: string;
				sha?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/tags
			getTags(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/teams
			getTeams(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/traffic/views
			getViews(options: {
				user?: string;
				repo?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repos/:user/:repo/releases/:id/assets
			listAssets(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/merges
			merge(options: {
				user?: string;
				repo?: string;
				base?: string;
				head?: string;
				commit_message?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/projects/columns/cards/:id/moves
			moveProjectCard(options: {
				user?: string;
				repo?: string;
				id?: string;
				position?: string;
				column_id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/projects/columns/:id/moves
			moveProjectColumn(options: {
				user?: string;
				repo?: string;
				id?: string;
				position?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /repositories/:id
			one(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/hooks/:id/pings
			pingHook(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection
			removeBranchProtection(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/collaborators/:collabuser
			removeCollaborator(options: {
				user?: string;
				repo?: string;
				collabuser?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection/required_status_checks
			removeProtectedBranchRequiredStatusChecks(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts
			removeProtectedBranchRequiredStatusChecksContexts(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection/restrictions
			removeProtectedBranchRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection/restrictions/teams
			removeProtectedBranchTeamRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /repos/:user/:repo/branches/:branch/protection/restrictions/users
			removeProtectedBranchUserRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/branches/:branch/protection/required_status_checks/contexts
			replaceProtectedBranchRequiredStatusChecksContexts(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/branches/:branch/protection/restrictions/teams
			replaceProtectedBranchTeamRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/branches/:branch/protection/restrictions/users
			replaceProtectedBranchUserRestrictions(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Array<string>;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/pages/builds
			requestPageBuild(options: {
				user?: string;
				repo?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/hooks/:id/test
			testHook(options: {
				user?: string;
				repo?: string;
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/branches/:branch/protection
			updateBranchProtection(options: {
				user?: string;
				repo?: string;
				branch?: string;
				required_status_checks?: Object;
				restrictions?: Object;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/comments/:id
			updateCommitComment(options: {
				user?: string;
				repo?: string;
				id?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /repos/:user/:repo/contents/:path
			updateFile(options: {
				user?: string;
				repo?: string;
				path?: string;
				message?: string;
				content?: string;
				sha?: string;
				branch?: string;
				committer?: Object
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repositories/:repo/invitations/:id
			updateInvite(options: {
				repo?: string;
				id?: string;
				permission?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/projects/:number
			updateProject(options: {
				user?: string;
				repo?: string;
				number?: Number;
				name?: string;
				body?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/projects/columns/cards/:id
			updateProjectCard(options: {
				user?: string;
				repo?: string;
				id?: string;
				note?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/projects/columns/:id
			updateProjectColumn(options: {
				user?: string;
				repo?: string;
				id?: string;
				name?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /repos/:user/:repo/branches/:branch/protection/required_status_checks
			updateProtectedBranchRequiredStatusChecks(options: {
				user?: string;
				repo?: string;
				branch?: string;
				body?: Object;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// POST /repos/:user/:repo/releases/:id/assets
			uploadAsset(options: {
				user?: string;
				repo?: string;
				id?: string;
				filePath?: string;
				name?: string;
				label?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

		search: {
			// GET /search/code
			code(options: {
				q?: string;
				sort?: string;
				order?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /legacy/user/email/:email
			email(options: {
				email?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /search/issues
			issues(options: {
				q?: string;
				sort?: string;
				order?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /search/repositories
			repos(options: {
				q?: string;
				sort?: string;
				order?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /search/users
			users(options: {
				q?: string;
				sort?: string;
				order?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

		}

		users: {
			// PATCH /user/repository_invitations/:id
			acceptRepoInvite(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /user/emails
			addEmails(options: {
				body?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/following/:user
			checkFollowing(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/following/:other_user
			checkIfOneFollowersOther(options: {
				user?: string;
				other_user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /user/gpg_keys
			createGpgKey(options: {
				armored_public_key?: string
			}, callback?: (err, res) => void): Promise<any>;

			// POST /user/keys
			createKey(options: {
				title?: string;
				key?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/repository_invitations/:id
			declineRepoInvite(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/emails
			deleteEmails(options: {
				body?: Array<string>
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/gpg_keys/:id
			deleteGpgKey(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/keys/:id
			deleteKey(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /users/:user/site_admin
			demote(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /user/memberships/orgs/:org
			editOrganizationMembership(options: {
				org?: string;
				state?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /user/following/:user
			followUser(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user
			get(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /users
			getAll(options: {
				since?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/:id
			getById(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/emails
			getEmails(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/followers
			getFollowers(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/followers
			getFollowersForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/following
			getFollowing(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/following
			getFollowingForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user
			getForUser(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/gpg_keys/:id
			getGpgKey(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/gpg_keys
			getGpgKeys(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/keys/:id
			getKey(options: {
				id?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/keys
			getKeys(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /users/:user/keys
			getKeysForUser(options: {
				user?: string;
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/memberships/orgs/:org
			getOrganizationMembership(options: {
				org?: string
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/orgs
			getOrgs(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// GET /user/repository_invitations
			getRepoInvites(options: {}, callback?: (err, res) => void): Promise<any>;

			// GET /user/teams
			getTeams(options: {
				page?: Number;
				per_page?: Number
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /users/:user/site_admin
			promote(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PUT /users/:user/suspended
			suspend(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /user/following/:user
			unfollowUser(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// DELETE /users/:user/suspended
			unsuspend(options: {
				user?: string
			}, callback?: (err, res) => void): Promise<any>;

			// PATCH /user
			update(options: {
				name?: string;
				email?: string;
				blog?: string;
				company?: string;
				location?: string;
				hireable?: Boolean;
				bio?: string
			}, callback?: (err, res) => void): Promise<any>;

		}

	}
	namespace Api {}
	export = Api;
}