#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/contract"
CANVASDB_SCHEMA_COMMIT=$(cd ../canvasdb-schema && git rev-parse --short HEAD)
CAPDB_SCHEMA_COMMIT=$(cd ../capdb-schema && git rev-parse --short HEAD)
DAM_SCHEMA_COMMIT=$(cd ../dam-schema && git rev-parse --short HEAD)
ERROR_SCHEMA_COMMIT=$(cd ../error-schema && git rev-parse --short HEAD)
ENCLAVE_SCHEMA_COMMIT=$(cd ../enclave-schema && git rev-parse --short HEAD)
PUBLISHER_SCHEMA_COMMIT=$(cd ../publisher-schema && git rev-parse --short HEAD)
RECIPEDB_SCHEMA_COMMIT=$(cd ../recipedb-schema && git rev-parse --short HEAD)
RMM_SCHEMA_COMMIT=$(cd ../rmm-schema && git rev-parse --short HEAD)
TRANSCODER_ONE_SCHEMA_COMMIT=$(cd ../transcoder-one-schema && git rev-parse --short HEAD)
TRANSCODER_THREE_SCHEMA_COMMIT=$(cd ../transcoder-three-schema && git rev-parse --short HEAD)
VIEWPORT_AGENT_SCHEMA_COMMIT=$(cd ../viewport-agent-schema && git rev-parse --short HEAD)
ZOD_REGISTRY_COMMIT=$(cd ../zod-registry && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/LICENSE" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
	--tab \
	--arg canvasdb_commit "$CANVASDB_SCHEMA_COMMIT" \
	--arg capdb_commit "$CAPDB_SCHEMA_COMMIT" \
	--arg dam_commit "$DAM_SCHEMA_COMMIT" \
	--arg error_commit "$ERROR_SCHEMA_COMMIT" \
	--arg enclave_commit "$ENCLAVE_SCHEMA_COMMIT" \
	--arg publisher_commit "$PUBLISHER_SCHEMA_COMMIT" \
	--arg recipedb_commit "$RECIPEDB_SCHEMA_COMMIT" \
	--arg rmm_commit "$RMM_SCHEMA_COMMIT" \
	--arg transcoder_one_commit "$TRANSCODER_ONE_SCHEMA_COMMIT" \
	--arg transcoder_three_commit "$TRANSCODER_THREE_SCHEMA_COMMIT" \
	--arg viewport_agent_commit "$VIEWPORT_AGENT_SCHEMA_COMMIT" \
	--arg registry_commit "$ZOD_REGISTRY_COMMIT" \
	'
	.peerDependencies["@dsbunny/canvasdb-schema"]		= "github:dsbunny/canvasdb-schema"						|
	.peerDependencies["@dsbunny/capdb-schema"]		= "github:dsbunny/capdb-schema"							|
	.peerDependencies["@dsbunny/dam-schema"]		= "github:dsbunny/dam-schema"							|
	.peerDependencies["@dsbunny/error-schema"]		= "github:dsbunny/error-schema"							|
	.peerDependencies["@dsbunny/enclave-schema"]		= "github:dsbunny/enclave-schema"						|
	.peerDependencies["@dsbunny/publisher-schema"]		= "github:dsbunny/publisher-schema"						|
	.peerDependencies["@dsbunny/recipedb-schema"]		= "github:dsbunny/recipedb-schema"						|
	.peerDependencies["@dsbunny/rmm-schema"]		= "github:dsbunny/rmm-schema"							|
	.peerDependencies["@dsbunny/transcoder-one-schema"]	= "github:dsbunny/transcoder-one-schema"					|
	.peerDependencies["@dsbunny/transcoder-three-schema"]	= "github:dsbunny/transcoder-three-schema"					|
	.peerDependencies["@dsbunny/viewport-agent-schema"]	= "github:dsbunny/viewport-agent-schema"					|
	.peerDependencies["@dsbunny/zod-registry"]		= "github:dsbunny/zod-registry"							|
	.devDependencies["@dsbunny/canvasdb-schema"]		= ("github:dsbunny/canvasdb-schema#" + $canvasdb_commit)			|
	.devDependencies["@dsbunny/capdb-schema"]		= ("github:dsbunny/capdb-schema#" + $capdb_commit)				|
	.devDependencies["@dsbunny/dam-schema"]			= ("github:dsbunny/dam-schema#" + $dam_commit)					|
	.devDependencies["@dsbunny/error-schema"]		= ("github:dsbunny/error-schema#" + $error_commit)				|
	.devDependencies["@dsbunny/enclave-schema"]		= ("github:dsbunny/enclave-schema#" + $enclave_commit)				|
	.devDependencies["@dsbunny/publisher-schema"]		= ("github:dsbunny/publisher-schema#" + $publisher_commit)			|
	.devDependencies["@dsbunny/recipedb-schema"]		= ("github:dsbunny/recipedb-schema#" + $recipedb_commit)			|
	.devDependencies["@dsbunny/rmm-schema"]			= ("github:dsbunny/rmm-schema#" + $rmm_commit)					|
	.devDependencies["@dsbunny/transcoder-one-schema"]	= ("github:dsbunny/transcoder-one-schema#" + $transcoder_one_commit)		|
	.devDependencies["@dsbunny/transcoder-three-schema"]	= ("github:dsbunny/transcoder-three-schema#" + $transcoder_three_commit)	|
	.devDependencies["@dsbunny/viewport-agent-schema"]	= ("github:dsbunny/viewport-agent-schema#" + $viewport_agent_commit)		|
	.devDependencies["@dsbunny/zod-registry"]		= ("github:dsbunny/zod-registry#" + $registry_commit)
	' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json
