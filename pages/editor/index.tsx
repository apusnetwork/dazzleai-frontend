import axios from "axios";
import WebsiteLayout from "@/frontend/components/layout/website";
import Loader from "@/frontend/components/loader/loader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import { TrashDeleteBin } from "@/frontend/components/basic-icons";
import Button from "@/frontend/components/button/button";
import Modal from "@/frontend/components/modal/modal";
import { useAppDispatch, useAppSelector } from "@/frontend/redux/hooks";
import { message, updateAuthState } from "@/frontend/redux/info/slice";
import { selectUser, selectUserStatus } from "@/frontend/redux/user/slice";
import styles from '@/frontend/styles/projects.module.scss';
import { Copy, Plus } from "lucide-react";



export default function EditorProjects() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userState = useAppSelector(selectUserStatus);

  const router = useRouter();
  const [projectModal, setProjectModal] = useState<ProjectI | undefined>(undefined);
  const [projects, setProjects] = useState<ProjectI[]>([])
  const [listLoader, setListLoader] = useState(true);
  const [projectLoader, setProjectLoader] = useState(false);

  async function getProjects() {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data)
    } catch {
      setProjects([])
    } finally {
      setListLoader(false)
    }
  }

  async function createProject() {

    if (!user.id) {
      dispatch(updateAuthState('register'));
      return
    }


    if (user.status !== 'active') {
      message(dispatch, { text: 'Please verify your account!', type: 'info' })
      return
    }


    const res = await axios.post('/api/projects');
    router.push('/editor/' + res.data.id)
  }

  async function duplicateProject(p: ProjectI) {

    if (!user.id) {
      dispatch(updateAuthState('register'));
      return
    }


    const res = await axios.post('/api/projects?id=' + p.id);
    setProjects([res.data, ...projects])
  }

  async function deleteProject(p: ProjectI | undefined) {
    setProjectLoader(true)
    if (!p) return
    try {
      await axios.delete(`/api/projects/${p.id}`);

      setProjects(projects.filter(pr => pr.id !== p.id))
      setProjectModal(undefined)

    } catch {
    } finally {
      setProjectLoader(false)
    }

  }

  useEffect(() => {
    getProjects();
  }, [user.id]);

  useEffect(() => {
    if ((userState === 'failed' || userState === 'completed') && !user.id) {
      dispatch(updateAuthState('register'));
    }
  }, [userState, user.id]);

  return (
    <WebsiteLayout
      title="Projects - AI Editor"
      image='/social-image-ai-editor.png'
    >
      <div className={styles._}>
        <div className={styles.head}>
          My Projects:
        </div>
        <div className={styles.projects}>
          <button className={[styles.project, styles.new_project].join(' ')} onClick={createProject}>
            <span className={styles.icon}>
              <Plus size={16} />
            </span>
            <span className={styles.text}>
              <span className={styles.name}>New AI Editor project</span>
              <span className={styles.date}>Outpaint and edit images</span>
            </span>
          </button>

          {listLoader ?
            <div className={styles.loader}>
              <Loader />
            </div>
            :

            projects.map(p => (
              <a className={styles.project} key={p.id} href={`/editor/${p.id}`}>
                <div className={styles._preview}>
                  <div
                    className={styles.preview}
                    style={{ backgroundImage: `url(${p.previewUrl})` }}
                  />
                </div>
                <div className={styles._meta}>
                  <div className={styles.meta}>
                    <div className={styles.name}>
                      {p.name}
                    </div>
                    <div className={styles.date}>
                      Edited {dayjs(p.updatedAt).fromNow()}
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <Button
                      size="sm"
                      type="icon"
                      onClick={(e) => { e.preventDefault(); duplicateProject(p) }}
                    >
                      <Copy />
                    </Button>
                    <Button
                      size="sm"
                      type="icon"
                      onClick={(e) => { e.preventDefault(); setProjectModal(p) }}
                    >
                      <TrashDeleteBin />
                    </Button>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
      <Modal
        title={`Delete ${projectModal && projectModal.name}`}
        show={projectModal !== undefined}
        onClose={() => setProjectModal(undefined)}
        actions={[
          <Button key={1} size="sm" type="default" onClick={() => setProjectModal(undefined)}>Cancel</Button>,
          <Button key={2} size="sm" type="danger" onClick={() => deleteProject(projectModal)} loading={projectLoader}>Delete</Button>,
        ]}
      >
        <p>
          Are you sure that you&apos;d like to delete <b>{projectModal && projectModal.name}</b> project?
        </p>
        <p>Keep in mind that this operation is irreversible. Partially generated frames will still be available in your Gallery.</p>

      </Modal>

    </WebsiteLayout>)
}